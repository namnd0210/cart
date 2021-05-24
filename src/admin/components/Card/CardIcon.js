import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for admin/components
import PropTypes from "prop-types";
// @material-ui/core admin/components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core admin/components
import styles from "admin/assets/jss/material-dashboard-react/components/cardIconStyle.js";

const useStyles = makeStyles(styles);

export default function CardIcon(props) {
  const classes = useStyles();
  const { className, children, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  children: PropTypes.node,
};
