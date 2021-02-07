import React from "react";

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
