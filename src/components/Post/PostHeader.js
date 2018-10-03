import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import injectSheet from "react-jss";

const styles = theme => ({
  header: {
    margin: "0 0 3em"
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.4em",
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
  const { classes, title, agency, subTitle, category, tags, date } = props;

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

  const categoryBlock = (
    <div>
      <ul>
        <li key={category}>
          <Link to={category}>{category}</Link>
        </li>
      </ul>
    </div>
  );

  function myDate(dateString) {
    const dateObj = new Date(dateString).toUTCString();
    const dateToShow = dateObj
      .split(" ")
      .slice(2, 4)
      .join(" ");

    return dateToShow;
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.agency}>
        <em>{agency}</em>
      </h2>
      <div className={classes.meta}>{myDate(date)}</div>
      <h2 className={classes.subTitle}>{subTitle}</h2>
      <div className={classes.category}>{category}</div>
      {/* {categoryBlock} */}
      {tagsBlock}
    </header>
  );
};

PostHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  agency: PropTypes.string,
  subTitle: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.string,
  date: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostHeader);
