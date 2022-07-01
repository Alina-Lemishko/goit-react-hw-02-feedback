import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={s.title}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
