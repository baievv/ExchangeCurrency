import React from "react";
import "./load-error.css";

const LoadError = () => {
  return (
    <div className="load-error">
      <span>
        Вибачте, схоже на те, що поганці з Приватбанку не хочуть ділитися своїми даними
        :(
      </span>
      <img alt="Something wrong!" src="https://illustrators.ru/uploads/illustration/image/655139/655139_original.jpg" />
    </div>
  );
};

export default LoadError;
