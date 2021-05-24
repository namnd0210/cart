import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for admin/components
import PropTypes from "prop-types";
// @material-ui/core admin/components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core admin/components
import styles from "admin/assets/jss/material-dashboard-react/components/cardBodyStyle.js";

const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node,
};
