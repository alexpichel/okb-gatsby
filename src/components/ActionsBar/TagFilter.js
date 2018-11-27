import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import FilterListIcon from "@material-ui/icons/FilterList";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  },
  popper: {
    zIndex: 1
  }
});

class TagFilter extends React.Component {
  state = {
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  handleFiltering = e => {
    const tag = e.target.innerText.trim();
    this.props.filterTag(tag);
    this.handleClose();
  };

  render() {
    const { classes, tags } = this.props;
    const { open } = this.state;

    return (
      <nav className={classes.fontSizeSetter}>
        <Manager>
          <Target>
            <IconButton
              aria-label="Filter by tag"
              aria-haspopup="true"
              onClick={this.handleClick}
              title="Filter the list by tag"
              className={classes.open}
            >
              <FilterListIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={`${classNames({ [classes.popperClose]: !open })} ${classes.popper}`}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="cat-menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem key="all" onClick={this.handleFiltering}>
                      All Posts
                    </MenuItem>
                    {tags.map(tag => (
                      <MenuItem key={tag} onClick={this.handleFiltering}>
                        {tag}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </nav>
    );
  }
}

TagFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  filterTag: PropTypes.func.isRequired
};

export default injectSheet(styles)(TagFilter);
