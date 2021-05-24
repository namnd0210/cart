import React from "react";
import PropTypes from "prop-types";
// @material-ui/core admin/components
import { makeStyles } from "@material-ui/core/styles";
// core admin/components
import styles from "admin/assets/jss/material-dashboard-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Info(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.node,
};
