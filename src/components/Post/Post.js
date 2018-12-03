import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, slug } = props;
  // const frontmatter = (post || {}).frontmatter;
  const title = ((post || {}).frontmatter || {}).title;
  const agency = ((post || {}).frontmatter || {}).agency;
  const logo = ((post || {}).frontmatter || {}).logo;
  const subTitle = ((post || {}).frontmatter || {}).subTitle;
  const category = ((post || {}).frontmatter || {}).category;
  const tags = ((post || {}).frontmatter || {}).tags;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;
  // const htmlAst = (post || {}).htmlAst;

  //console.log(htmlAst);

  return (
    <Article>
      <PostHeader
        title={title}
        agency={agency}
        logo={logo}
        subTitle={subTitle}
        category={category}
        tags={tags}
        date={date}
      />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} tags={tags} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default Post;
