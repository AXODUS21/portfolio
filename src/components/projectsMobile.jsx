import React, { useState } from 'react';
import ProjectComponent from './ProjectComponent';
import gseas from "../photos/projects/gseas (1).png";
import gseas2 from "../photos/projects/gseas (2).png";
import gseas3 from "../photos/projects/gseas (3).png";
import emerse1 from "../photos/projects/Emerse (1).png";
import emerse2 from "../photos/projects/Emerse (2).png";
import emerse3 from "../photos/projects/Emerse (3).png";
import vain from "../photos/projects/vain (1).png";
import vain2 from "../photos/projects/vain (2).png";
import vain3 from "../photos/projects/vain (3).png";
import amazon from "../photos/projects/amazon.png";
import amazon2 from "../photos/projects/amazon.png";
import amazon3 from "../photos/projects/amazon.png";
import ileap from "../photos/projects/ileap.png";
import ileap2 from "../photos/projects/ileap (1).png";
import ileap3 from "../photos/projects/ileap (2).png";
import xelldealership from "../photos/projects/xelldealership.png";
import xelldealership2 from "../photos/projects/xelldealership (1).png";
import xelldealership3 from "../photos/projects/xelldealership (2).png";
import "../css/projects.css";

  const PROJECT_1_TEXT = `GSEAS (Sea of Group Chats) is a dynamic platform designed for creating and managing group chats effortlessly. With GSEAS, users can set up unlimited group chats, engage in real-time conversations, and personalize each chat’s details—including the chat image, member list, and group name. The platform offers a seamless experience for social and collaborative interactions, making it easy to stay connected with multiple groups.`;
  const PROJECT_2_TEXT = `This is a MERN stack project designed as a fully responsive e-commerce website, providing a seamless shopping experience across all devices. The platform includes PayPal payment integration, ensuring secure and convenient transactions for users. It features a robust authentication system that allows users to create accounts, log in, and securely manage their profiles. With an account, users can save their purchases in a cart for future access or checkout. All user data, including account details and cart information, are stored securely in a database, leveraging MongoDB for efficient data management. `;
  const PROJECT_3_TEXT = `Xelldealership is a cutting-edge e-commerce platform designed for small businesses. Xelldealership offers a seamless and efficient way to manage inventory, track sales, and generate revenue. The platform has a user-friendly interface, allowing small businesses to create products, manage inventory, and track sales. Xelldealership also includes a payment gateway, allowing businesses to accept payments from customers.`;
  const PROJECT_4_TEXT = `Vain is a cutting-edge virtual reality platform designed for educational institutions. Vain offers a seamless and immersive learning experience for students, allowing them to engage with real-world scenarios, interact with virtual objects, and learn new skills. The platform has a user-friendly interface, allowing educators to create courses, manage students, and track progress. Vain also includes a gamification feature, allowing students`;
  const PROJECT_5_TEXT = `Amazon is a global e-commerce platform that offers a wide range of products, services, and experiences. Amazon has a user-friendly interface, allowing customers to browse and buy products, manage their shopping cart, and pay for their purchases. The platform also includes a payment gateway, allowing customers to accept payments from their credit or debit cards.`;
  const PROJECT_6_TEXT = `ILEAP also includes features like skill assessments, resume building, and personalized career recommendations to support students in their professional journey. Employers can post job and internship listings, review candidate profiles, and manage applications directly on the platform. By connecting educational institutions, students, and employers, ILEAP aims to streamline the transition from learning to employment, fostering career success and enhancing institutional outcomes.`;

const ProjectsMobile = ({handlePopUp, degrees, popUp}) => {
  
  return (
      <div
        className="box2"
        style={{ transform: `perspective(${popUp ? "30": "1300" }px) rotateX(${degrees}deg)` }}
      >
        <div className="center-text" style={{opacity: `${popUp ? "0" : "1"}`}}>PROJECTS</div>
        <div className="projM" style={{ "--i": 6 }}>
          <ProjectComponent
            image={gseas}
            image2={gseas2}
            image3={gseas3}
            title={"GSEAS"}
            stack={["NextJS", "MongoDB", "CSS", "Tailwind"]}
            textS={"white"}
            text={PROJECT_1_TEXT}
            link={"https://gseas.vercel.app/"}
            hubLink={"https://github.com/AXODUS21/GSEAS"}
            handlePopUp={handlePopUp}
          />
        </div>
        <div className="projM" style={{ "--i": 2 }}>
          <ProjectComponent
            image={emerse1}
            image2={emerse2}
            image3={emerse3}
            title={"EMERSE"}
            stack={["React", "CSS", "Vite"]}
            textS={"black"}
            text={PROJECT_2_TEXT}
            link={"https://emerse.netlify.app/"}
            hubLink={"https://github.com/AXODUS21/Emerse"}
            handlePopUp={handlePopUp}
          />
        </div>
        <div className="projM" style={{ "--i": 3 }}>
          <ProjectComponent
            image={xelldealership}
            image2={xelldealership2}
            image3={xelldealership3}
            title={"XELLDEALERSHIP"}
            stack={["React", "Typescript", "Firebase", "CSS", "Vite"]}
            textS={"white"}
            text={PROJECT_3_TEXT}
            link={"https://xelldealership.netlify.app/"}
            hubLink={"https://github.com/AXODUS21/xelldealership"}
            handlePopUp={handlePopUp}
          />
        </div>
        <div className="projM" style={{ "--i": 4 }}>
          <ProjectComponent
            image={vain}
            image2={vain2}
            image3={vain3}
            title={"VAIN"}
            stack={["React", "CSS", "Vite"]}
            textS={"black"}
            text={PROJECT_4_TEXT}
            link={"https://vain21.netlify.app/"}
            hubLink={"https://github.com/AXODUS21/vain"}
            handlePopUp={handlePopUp}
          />
        </div>
        <div className="projM" style={{ "--i": 5 }}>
          <ProjectComponent
            image={amazon}
            image2={amazon2}
            image3={amazon3}
            title={"AMAZON-COPY"}
            stack={["HTML", "CSS", "JS"]}
            textS={"black"}
            text={PROJECT_5_TEXT}
            link={"https://axodus21.github.io/amazon-copy/amazon.html"}
            hubLink={"https://github.com/AXODUS21/amazon-copy"}
            handlePopUp={handlePopUp}
          />
        </div>
        <div className="projM" style={{ "--i": 1 }}>
          <ProjectComponent
            image={ileap}
            image2={ileap2}
            image3={ileap3}
            title={"ILEAP"}
            stack={["Firebase", "React", "CSS", "JS"]}
            textS={"white"}
            text={PROJECT_6_TEXT}
            link={"https://ileap-a49b9.web.app/"}
            hubLink={"https://github.com/AXODUS21/ILEAP"}
            handlePopUp={handlePopUp}
          />
        </div>
      </div>
  );
}

export default ProjectsMobile
