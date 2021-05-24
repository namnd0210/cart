import React from "react";
import PropTypes from "prop-types";
// @material-ui/core admin/components
import { makeStyles } from "@material-ui/core/styles";
// core admin/components
import styles from "admin/assets/jss/material-dashboard-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Warning(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}

Warning.propTypes = {
  children: PropTypes.node,
};
