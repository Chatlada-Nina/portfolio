import { toast as baseToast } from "react-toastify";

const defaultOptions = {
  icon: false,
};

const SuccessIcon = () => (
  <span className="portfolio-toast-icon portfolio-toast-icon--success" aria-hidden="true">
    <i className="ri-checkbox-circle-fill" />
  </span>
);

const ErrorIcon = () => (
  <span className="portfolio-toast-icon portfolio-toast-icon--error" aria-hidden="true">
    <i className="ri-error-warning-fill" />
  </span>
);

export const toast = {
  success: (message, options = {}) =>
    baseToast.success(message, {
      ...defaultOptions,
      icon: <SuccessIcon />,
      ...options,
    }),
  error: (message, options = {}) =>
    baseToast.error(message, {
      ...defaultOptions,
      icon: <ErrorIcon />,
      ...options,
    }),
};
