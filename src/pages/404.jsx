import React from "react";

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return null;
};

export default NotFoundPage;
