import React, { useState } from 'react';
import ProjectComponent from './ProjectComponent';
import gseas from "../photos/projects/gseas (1).png";
import emerse1 from "../photos/projects/Emerse (1).png";
import vain from "../photos/projects/vain (1).png";
import amazon from "../photos/projects/amazon.png";
import AG from "../photos/projects/AG (1).png";
import xelldealership from "../photos/projects/xelldealership.png";
import "../css/projects.css";
import { useColor } from '../globals/global';

  const PROJECT_1_TEXT = `GSEAS (Sea of Group Chats) is a dynamic platform designed for creating and managing group chats effortlessly. With GSEAS, users can set up unlimited group chats, engage in real-time conversations, and personalize each chat’s details—including the chat image, member list, and group name. The platform offers a seamless experience for social and collaborative interactions, making it easy to stay connected with multiple groups.`;
  const PROJECT_2_TEXT = `This is a MERN stack project designed as a fully responsive e-commerce website, providing a seamless shopping experience across all devices. The platform includes PayPal payment integration, ensuring secure and convenient transactions for users. It features a robust authentication system that allows users to create accounts, log in, and securely manage their profiles. With an account, users can save their purchases in a cart for future access or checkout. All user data, including account details and cart information, are stored securely in a database, leveraging MongoDB for efficient data management. `;
  const PROJECT_3_TEXT = `Xelldealership is a cutting-edge e-commerce platform designed for small businesses. Xelldealership offers a seamless and efficient way to manage inventory, track sales, and generate revenue. The platform has a user-friendly interface, allowing small businesses to create products, manage inventory, and track sales. Xelldealership also includes a payment gateway, allowing businesses to accept payments from customers.`;
  const PROJECT_4_TEXT = `Vain is a cutting-edge virtual reality platform designed for educational institutions. Vain offers a seamless and immersive learning experience for students, allowing them to engage with real-world scenarios, interact with virtual objects, and learn new skills. The platform has a user-friendly interface, allowing educators to create courses, manage students, and track progress. Vain also includes a gamification feature, allowing students`;
  const PROJECT_5_TEXT = `Amazon is a global e-commerce platform that offers a wide range of products, services, and experiences. Amazon has a user-friendly interface, allowing customers to browse and buy products, manage their shopping cart, and pay for their purchases. The platform also includes a payment gateway, allowing customers to accept payments from their credit or debit cards.`;
  const PROJECT_6_TEXT = `This website, crafted with Next.js and Tailwind CSS, is a seamless blend of cutting-edge performance and sleek design. Leveraging Next.js for lightning-fast page loads, server-side rendering, and optimized SEO, it ensures a flawless user experience. Tailwind CSS enhances the UI with clean, responsive, and modern visuals, while keeping the codebase efficient and maintainable. Every detail is fine-tuned for speed, scalability, and user satisfaction—setting a new standard for web optimization."`;

const ProjectsMobile = ({handlePopUp, degrees, popUp}) => {
  const {color} = useColor()
  return (
    <div
      className="box2"
      style={{
        transform: `perspective(${
          popUp ? "30" : "1300"
        }px) rotateX(${degrees}deg)`,
      }}
    >
      <div
        className="center-text"
        style={{ opacity: `${popUp ? "0" : "1"}`, color: `#${color}` }}
      >
        PROJECTS
      </div>
      <div className="projM" style={{ "--i": 6 }}>
        <ProjectComponent
          image={gseas}
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
          title={"EMERSE"}
          stack={["React", "CSS", "Vite"]}
          textS={"black"}
          text={PROJECT_2_TEXT}
          link={"https://emerse.netlify.app/"}
          hubLink={"https://github.com/AXODUS21/Emerse"}
          handlePopUp={handlePopUp}
        />
      </div>
      <div className="projM" style={{ "--i": 1 }}>
        <ProjectComponent
          image={xelldealership}
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
          title={"AMAZON-COPY"}
          stack={["HTML", "CSS", "JS"]}
          textS={"black"}
          text={PROJECT_5_TEXT}
          link={"https://axodus21.github.io/amazon-copy/amazon.html"}
          hubLink={"https://github.com/AXODUS21/amazon-copy"}
          handlePopUp={handlePopUp}
        />
      </div>
      <div className="projM" style={{ "--i": 3 }}>
        <ProjectComponent
          image={AG}
          title={"AG DENTAL CLINIC"}
          stack={["NextJS", "CSS", "Tailwind"]}
          textS={"black"}
          text={PROJECT_6_TEXT}
          link={"https://agdental.vercel.app/"}
          hubLink={"https://github.com/AXODUS21/AG-Dental"}
          handlePopUp={handlePopUp}
        />
      </div>
    </div>
  );
}

export default ProjectsMobile
