import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Layout from "../components/layout";

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pageContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const authorsEdges = this.props.data.authors.edges;
    return (
      <Layout location={this.props.location}>
        <div className="category-container">
          <Helmet
            title={`${category} | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} postAuthors={authorsEdges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          category: { eq: $category }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
    authors: allAuthorsJson {
      edges {
        node {
          uid
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default CategoryTemplate;
