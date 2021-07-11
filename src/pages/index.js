import React from "react";
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mason Hoffman - Software Engineer</title>
        <html lang={'en'} />
        <meta name="description" content={'Mason Hoffman - Portfolio'} />
      </Helmet>
      <App />
    </>
  )
}

export default IndexPage
