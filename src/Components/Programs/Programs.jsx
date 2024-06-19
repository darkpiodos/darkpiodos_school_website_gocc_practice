import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_4 from "../../assets/program-4.png";
import program_5 from "../../assets/program-5.png";
import program_6 from "../../assets/program-6.png";

import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="program card2">
        <img src={program_1} alt="Program Image 1" />
        <div className="caption">
          <img src={program_icon_1} alt="Program Icon 1" />
          <p>Kinder - Elementary</p>
        </div>
      </div>
      <div className="program card2">
        <img src={program_2} alt="Program Image 2" />
        <div className="caption">
          <img src={program_icon_2} alt="Program Icon 2" />
          <p>Junior Highschool</p>
        </div>
      </div>
      <div className="program card2">
        <img src={program_3} alt="Program Image 3" />
        <div className="caption">
          <img src={program_icon_3} alt="Program Icon 3" />
          <p>Senior Highschool </p>
        </div>
      </div>
      <div className="program card2">
        <img src={program_4} alt="Program Image 3" />
        <div className="caption">
          <img src={program_icon_3} alt="Program Icon 3" />
          <p>STEM Strand </p>
        </div>
      </div>
      <div className="program card2">
        <img src={program_5} alt="Program Image 3" />
        <div className="caption">
          <img src={program_icon_3} alt="Program Icon 3" />
          <p>HUMSS Strand </p>
        </div>
      </div>
      <div className="program card2">
        <img src={program_6} alt="Program Image 3" />
        <div className="caption">
          <img src={program_icon_3} alt="Program Icon 3" />
          <p>ABM Strand </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
