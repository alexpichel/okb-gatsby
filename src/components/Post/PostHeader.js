import React from "react";
import PropTypes from "prop-types";
// import Link from "gatsby-link";
import injectSheet from "react-jss";
import LazyLoad from "react-lazyload";
import moment from "moment";

const styles = theme => ({
  header: {
    margin: "0 0 3em",
    border: "4px solid #555",
    padding: "1em",
    [`@media (max-width: 292px)`]: {
      border: "none"
    }
  },
  logo: {
    position: "relative",
    flexShrink: 0,
    overflow: "hidden",
    height: "80px",
    margin: "1.2em 0 0",
    transition: "all .5s",
    "& img": {
      height: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      marginRight: ".5em",
      height: "80px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      marginRight: ".8em",
      height: "110px",
      transition: "all .3s",
      transitionTimingFunction: "ease",
      ".moving-featured &, .is-aside &": {
        width: "50px",
        height: "50px"
      }
    }
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.2em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  agency: {
    color: theme.main.colors.subTitle,
    fontSize: `${theme.main.fonts.subTitle.size}em`,
    margin: "0 0 0.4em",
    lineHeight: theme.main.fonts.subTitle.lineHeight,
    fontWeight: theme.main.fonts.subTitle.weight,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`
    }
  },
  subTitle: {
    color: theme.main.colors.subTitle,
    fontSize: `${theme.main.fonts.subTitle.size}em`,
    lineHeight: theme.main.fonts.subTitle.lineHeight,
    fontWeight: theme.main.fonts.subTitle.weight,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`
    }
  },
  category: {
    fontSize: `${theme.main.fonts.content.size}em`,
    fontWeight: theme.main.fonts.content.weight,
    color: theme.main.colors.content
  },
  tags: {
    fontSize: `${theme.main.fonts.content.size}em`,
    fontWeight: theme.main.fonts.content.weight,
    color: theme.main.colors.content
  },
  meta: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: theme.main.fonts.meta.weight,
    color: theme.main.colors.meta
  }
});

const PostHeader = props => {
  const { classes, logo, title, agency, subTitle, category, tags, date } = props;

  const tagsBlock = (
    <div className="">
      <ul className="">
        {tags &&
          tags.map((tag, i) => (
            <li className={classes.tags} key={tag}>
              {/* <Link to={tag} className={classes.tags}> */}
              {tags[i]}
              {/* </Link> */}
            </li>
          ))}
      </ul>
    </div>
  );

  // const categoryBlock = (
  //   <div>
  //     <ul>
  //       <li key={category}>
  //         <Link to={category}>{category}</Link>
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.agency}>
        <em>{agency}</em>
      </h2>
      <div className={classes.meta}>
        <time dateTime={moment(date).format("MMMM YYYY")}>
          Added {moment(date).format("MMMM YYYY")}
        </time>
      </div>
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
      <h2 className={classes.subTitle}>{subTitle}</h2>
      <div className={classes.category}>{category}</div>
      {/* {categoryBlock} */}
      {tagsBlock}
    </header>
  );
};

PostHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object,
  title: PropTypes.string.isRequired,
  agency: PropTypes.string,
  logo: PropTypes.object,
  cover: PropTypes.object,
  subTitle: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.string,
  date: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostHeader);
