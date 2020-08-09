import React, { useState, useEffect } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link,} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import SideBar from "../component/SideBar";
import Banner from "../component/Banner";
import Paginations from "../component/Paginations";

import axios from "axios";
import queryString from "query-string";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { fetchListArticle, paginatedArticle, outsideClickTag } from "../actions/Article";
import { fetchListArticleByTag } from "../actions/Article";

const Articles = () => {
  const filters = useSelector(state => state.articles.filters)
  console.log(filters.isCompleted)
  const posts = useSelector(state => state.articles.list)
  const dispatch = useDispatch();
 

  useEffect(() => {
    try {
      const paramString = queryString.stringify(filters);
      axios
        .get(`https://conduit.productionready.io/api/articles?${paramString}`)
        .then(res => {
          const posts = res.data.articles;
          const action = fetchListArticle(posts)
          dispatch(action)
        });
        

    } catch (error) {
      console.log(error);
    }
  }, [filters]);

  
  

  function handlePageChange(newPage) {
    const action = paginatedArticle(newPage);
    dispatch(action)
  }

  function handleFilterPost(tag) {
     const action = fetchListArticleByTag(tag)
    dispatch(action)
      
  }

  function onOutSideClick(event) {
    event.preventDefault();
    const action = outsideClickTag();
    dispatch(action)
  }

  return (
    <Container>
      <Banner />
      
      <Nav>
        <NavItem>
          <div className="link-articles">
            <Link
              className={classNames("tag-link", {
                active: !filters.isCompleted
              })}
              onClick={onOutSideClick}
              to="/"
            >
              Global Feed
            </Link>
            {filters.isCompleted && (
              <Link
                className={classNames("tag-link", {
                  active: filters.isCompleted
                })}
                to="/"
              >
                {" "}
                #{filters.tag}{" "}
              </Link>
            )}
          </div>
        </NavItem>
      </Nav>

      <Row>
        <Col className="col-md-9" md="6">
          {posts.map( post => (
            <Card className="Card-Item">
              <CardBody>
                <div className="Article-preview">
                  <img src={post.author.image} alt=" " />
                  <div className="infor">
                    <CardText className="author">
                      {post.author.username}
                    </CardText>
                    <CardText className="date"> {post.createdAt} </CardText>
                  </div>
                  <Button className="btn btn-sm">
                    {" "}
                    {post.favoritesCount}{" "}
                  </Button>
                </div>
                
                <Link className = 'link-pagedetail' to = {'/'+post.slug+'/article'} >
                <CardTitle>{post.title}</CardTitle>
                <CardSubtitle>{post.description}</CardSubtitle>
                <CardText className="more-infor"> Read more... </CardText>
                </Link>
              </CardBody>
            </Card>
          ))}
        </Col>
        <SideBar onFilterClicked={handleFilterPost} />
      </Row>
      <Paginations paginations={filters} onPageChange={handlePageChange} />
    </Container>
  );
};

export default Articles;
