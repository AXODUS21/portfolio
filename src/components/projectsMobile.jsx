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
  const PROJECT_2_TEXT = `ILEAP (Intelligent Learning Application Platform) is a cutting-edge learning management system designed for educational institutions. ILEAP offers a comprehensive solution for managing and delivering educational content, providing instant feedback, and ensuring that students receive the best possible learning experience. The platform has a user-friendly interface, allowing educators to create courses, manage students, and track progress. ILEAP also includes a gamification feature, allowing students`;
  const PROJECT_3_TEXT = `Xelldealership is a cutting-edge e-commerce platform designed for small businesses. Xelldealership offers a seamless and efficient way to manage inventory, track sales, and generate revenue. The platform has a user-friendly interface, allowing small businesses to create products, manage inventory, and track sales. Xelldealership also includes a payment gateway, allowing businesses to accept payments from customers.`;
  const PROJECT_4_TEXT = `Vain is a cutting-edge virtual reality platform designed for educational institutions. Vain offers a seamless and immersive learning experience for students, allowing them to engage with real-world scenarios, interact with virtual objects, and learn new skills. The platform has a user-friendly interface, allowing educators to create courses, manage students, and track progress. Vain also includes a gamification feature, allowing students`;
  const PROJECT_5_TEXT = `Amazon is a global e-commerce platform that offers a wide range of products, services, and experiences. Amazon has a user-friendly interface, allowing customers to browse and buy products, manage their shopping cart, and pay for their purchases. The platform also includes a payment gateway, allowing customers to accept payments from their credit or debit cards.`;
  const PROJECT_6_TEXT = `A MERN stack project. this website is a e-ccomerce type of
                website fully responsive and even has PAYPAL payment
                integration. It has an authentication function where users can
                make an account to save their purchases in a cart and all of
                those data are saved in a database.`;

const ProjectsMobile = ({handlePopUp, degrees}) => {
  
  return (
    <div className="">
      <div
        className="box2"
        style={{ transform: `perspective(1200px) rotateX(${degrees}deg)` }}
      >
        <div className="center-text">PROJECTS</div>
        <div className="projM" style={{ "--i": 1 }}>
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
            stack={["React", "CSS", "MongoDB", "Vite"]}
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
            stack={["React", "CSS", "MongoDB", "Vite"]}
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
        <div className="projM" style={{ "--i": 6 }}>
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
    </div>
  );
}

export default ProjectsMobile

  // <div className="grid gap-36">
  //     <div className="flex gap-3">
  //       <div className="1">
  //         <ProjectRadio
  //           title={"ILEAP"}
  //           height={projectToOpen.ileap}
  //           setProjectToOpen={setProjectToOpen}
  //           details={`ILEAP is a platform designed to help students and graduates find jobs and internships. It offers features like student profiles, job search, and application progress tracking, making it easier for users to connect with employers. The platform also includes analytics and reporting tools for administrators, providing insights into user engagement and success rates. With these resources, ILEAP supports students in building their careers effectively. It’s an all-in-one solution for job seekers and administrators alike.`}
  //           image={ileap}
  //           handlePopUp={handlePopUp}
  //           link="https://ileap-a49b9.web.app/"
  //           hubLink="https://github.com/AXODUS21/ILEAP"
  //           style={"white"}
  //           stack={["Firebase", "React", "CSS", "JS"]}
  //         />
  //       </div>
  //       <div className="2">
  //         <ProjectRadio
  //           title={"Amazon"}
  //           height={projectToOpen.Amazon}
  //           setProjectToOpen={setProjectToOpen}
  //           details={`This project is a clone of the Amazon website, developed with HTML, CSS, and JavaScript to replicate essential e-commerce functionalities. It uses JavaScript to render all items dynamically, allowing users to browse through a selection of products. The site features a shopping cart that tracks the quantity of items added, updating the total cost in real-time as users adjust their selections. Additionally, it provides an interactive user experience similar to Amazon's, enabling users to simulate product selection, cart management, and purchase calculations.`}
  //           image={amazon}
  //           handlePopUp={handlePopUp}
  //           link="https://axodus21.github.io/amazon-copy/amazon.html"
  //           hubLink="https://github.com/AXODUS21/amazon-copy"
  //           style={"black"}
  //           stack={["JS", "CSS", "HTML"]}
  //         />
  //       </div>
  //     </div>

  //     <div className="flex gap-3">
  //       <div className="1">
  //         <ProjectRadio
  //           title={"EMERSE"}
  //           height={projectToOpen.Emerse}
  //           setProjectToOpen={setProjectToOpen}
  //           details={`This project is a clone of the Amazon website, developed with HTML, CSS, and JavaScript to replicate essential e-commerce functionalities. It uses JavaScript to render all items dynamically, allowing users to browse through a selection of products. The site features a shopping cart that tracks the quantity of items added, updating the total cost in real-time as users adjust their selections. Additionally, it provides an interactive user experience similar to Amazon's, enabling users to simulate product selection, cart management, and purchase calculations.`}
  //           image={emerse2}
  //           handlePopUp={handlePopUp}
  //           link="https://emerse.netlify.app/"
  //           hubLink="https://github.com/AXODUS21/Emerse"
  //           style={"white"}
  //           stack={["React", "CSS", "MongoDB", "Vite"]}
  //         />
  //       </div>
  //       <div className="1">
  //         <ProjectRadio
  //           title={"Xelldealership"}
  //           height={projectToOpen.Xelldealership}
  //           setProjectToOpen={setProjectToOpen}
  //           details={`This car dealership website is built with React and TypeScript, featuring a personalized experience that recognizes the logged-in user. If the user has an admin account, they gain access to exclusive functionality, allowing them to add new cars to the inventory displayed on the store page. This admin-only access ensures that only authorized accounts can modify the car listings, maintaining security and control over the displayed content.`}
  //           image={xelldealership}
  //           handlePopUp={handlePopUp}
  //           link="https://xelldealership.netlify.app/"
  //           hubLink="https://github.com/AXODUS21/xelldealership"
  //           style={"white"}
  //           stack={["React", "CSS", "MongoDB", "Vite"]}
  //         />
  //       </div>
  //     </div>

  //     <div className="flex gap-3">
  //       <div className="1">
  //         <ProjectRadio
  //           title={"VAIN"}
  //           height={projectToOpen.Vain}
  //           setProjectToOpen={setProjectToOpen}
  //           details={`VAIN (Voice All In One) is a versatile website offering multiple utilities and entertainment tools—such as a calculator, a classic snake game, a digital diary, a to-do list, and a rock-paper-scissors game. Each feature is fully accessible through voice commands, creating a seamless, hands-free user experience that combines functionality and fun in a single platform.`}
  //           image={vain}
  //           handlePopUp={handlePopUp}
  //           link="https://vain21.netlify.app/"
  //           hubLink="https://github.com/AXODUS21/vain"
  //           style={"black"}
  //           stack={["React", "CSS", "MongoDB", "Vite"]}
  //         />
  //       </div>
  //       <div className="2">
  //         <ProjectRadio
  //           title={"GSEAS"}
  //           height={projectToOpen.Gseas}
  //           setProjectToOpen={setProjectToOpen}
  //           details={`GSEAS (Sea of Group Chats) is a dynamic platform designed for creating and managing group chats effortlessly. With GSEAS, users can set up unlimited group chats, engage in real-time conversations, and personalize each chat’s details—including the chat image, member list, and group name. The platform offers a seamless experience for social and collaborative interactions, making it easy to stay connected with multiple groups.`}
  //           image={gseas}
  //           handlePopUp={handlePopUp}
  //           link="https://gseas.vercel.app/"
  //           hubLink="https://github.com/AXODUS21/GSEAS"
  //           style={"white"}
  //           stack={["NextJS", "MongoDB", "CSS", "Tailwind"]}
  //         />
  //       </div>
  //     </div>
  //   </div>