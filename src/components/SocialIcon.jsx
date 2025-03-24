import React from "react";

const SocialIcon = ({ Icon, className, ...props }) => {
  if (!Icon) {
    return null; // Return nothing if Icon is not provided
  }

  return <Icon className={className} {...props} />;
};

export default SocialIcon;
