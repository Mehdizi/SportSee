import React from "react";
import { usePresentationDatas } from "../../../hooks/usePresentationDatas";
import "./Presentation.scss";

export const Presentation = () => {
  const { presentationInfos } = usePresentationDatas();
  return (
    <div className="presentation-wrapper">
      <h1>
        Bonjour <span>{presentationInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};
