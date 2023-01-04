import React from "react";
import { NavLink } from "react-router-dom";

const ErrorBody = () => {
  return (
    <div className="error">
      <h2 className="error__code">404</h2>
      <span className="error__com">
        {" "}
        Oups! La page que{" "}
        <span className="inline">vous demandez n'existe pas.</span>
      </span>
      <NavLink to="/" className="error__link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default ErrorBody;
