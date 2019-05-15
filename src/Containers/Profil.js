import React from "react";

const Profil = props => {
  return (
    <div>
      <h2>Hello {props.user.username}</h2>
      <h3>Ceci est votre espace personnel</h3>
    </div>
  );
};

export default Profil;
