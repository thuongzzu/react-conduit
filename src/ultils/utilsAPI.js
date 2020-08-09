 import * as baseURL from '../constant/URL'
import axios from 'axios'
import LoginService from '../service/login-service';

const fetchTag = async () => {
  const { data, status } = await axios.get(baseURL.URL+'/tags');
    if (status >= 400) {
      throw new Error(data.errors);
    }
    return data.tags;
  };

const fetchArticles = async() =>{
  const { data, status } = await axios.get(baseURL.URL+'/articles');
    if (status >= 400) {
      throw new Error(data.errors);
    }
    return data.tags;
  };

  const Login = async (email, password) => {
    const { data, status } = await axios.post(baseURL.URL+'/users/login', {
      user: {
        email,
        password,
      },
    });
    if (status >= 400) {
      throw new Error(data.errors);
    }
    return data;
  };

  const fetchUser = async () => {
    const token = LoginService.getAccessToken;
    if (!token) {
      throw new Error("Error User");
    }
  
    const { data, status } = await axios.get(baseURL.URL+'/user', {
      headers: { Authorization: `Token ${token}` },
    });
  
    if (status >= 400) {
      throw new Error(data.errors);
    }
  
    return data;
  };

  const fetchComment = async(slug) =>{
    const { data, status } = await axios.get(baseURL.URL+`/articles/${slug}/comments`);
    if (status >= 400) {
      throw new Error(data.errors);
    }
    return data.comments;
  };
  
  const fetchArticlePage = async(slug) => {
    const { data, status } = await axios.get(baseURL.URL+`/articles/${slug}`);
    if (status >= 400) {
      throw new Error(data.errors);
    }
    return data.article;
  }

  export {fetchTag, fetchArticles,Login, fetchUser,fetchComment, fetchArticlePage}