import React, { useEffect } from "react";
import { Col } from "reactstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadingTag } from "../actions/Tags";

const SideBar = props => {
  const { onFilterClicked } = props;

  const tags = useSelector(state => state.tags.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadingTag())
  }, [dispatch]);

  function handleFilterPost(tag) {
    if (onFilterClicked) {
      onFilterClicked(tag);
    }
  }

  return (
    <Col className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {tags.map((tag, index) => (
            <a
              onClick={() => handleFilterPost(tag)}
              key={index}
              href
              className="tag-default tag-pill"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </Col>
  );
};
export default SideBar;
