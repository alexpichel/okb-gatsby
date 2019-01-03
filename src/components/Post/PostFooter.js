import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
require("core-js/fn/array/find");

import asyncComponent from "../common/AsyncComponent/";
import PostAuthor from "./PostAuthor";

const styles = theme => ({
  footer: {
    color: theme.main.colors.footer,
    fontSize: `${theme.main.fonts.footer.size}em`,
    lineHeight: theme.main.fonts.footer.lineHeight,
    "& p": {
      margin: 0
    }
  }
});

const PostShare = asyncComponent(() =>
  import("./PostShare")
    .then(module => {
      return module;
    })
    .catch(error => {})
);

const PostFooter = ({ classes, author, post, slug }) => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <LazyLoad height={60} overflow={true} throttle={300} once={true} offset={100}>
          <picture>
            <source type="image/webp" srcSet={logo} />
            <source srcSet={logo} />
            <img src={logo} alt="" />
          </picture>
        </LazyLoad>
        {/*<Img sizes={post.node.frontmatter.cover.children[0].sizes} />*/}
      </div>
      <h2 className={classes.author}>
      <p>"Submitted by " {author}</p></h2>
      <h2 className={classes.agency}>
        <em>{agency}</em>
      </h2>
    </header>
  );
};

PostFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostFooter);
