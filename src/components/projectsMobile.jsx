import React, { useState } from 'react'
import ProjectRadio from './ProjectRadio'
import vain from "../photos/projects/vain (1).png";
import emerse2 from "../photos/projects/Emerse (2).png";
import amazon from "../photos/projects/amazon.png";
import ileap from "../photos/projects/ileap.png";
import xelldealership from "../photos/projects/xelldealership.png";
import gseas from "../photos/projects/gseas (1).png";


const ProjectsMobile = ({handlePopUp}) => {
  const [projectToOpen, setProjectToOpen] = useState({
      ileap: 60,
      Amazon: 60,
      Emerse: 60,
      Xelldealership: 60,
      Vain: 60,
      Gseas: 60,
  })

  return (
    <div className="grid gap-36">
      <div className="flex gap-3">
        <div className="1">
          <ProjectRadio
            title={"ILEAP"}
            height={projectToOpen.ileap}
            setProjectToOpen={setProjectToOpen}
            details={`ILEAP is a platform designed to help students and graduates find jobs and internships. It offers features like student profiles, job search, and application progress tracking, making it easier for users to connect with employers. The platform also includes analytics and reporting tools for administrators, providing insights into user engagement and success rates. With these resources, ILEAP supports students in building their careers effectively. It’s an all-in-one solution for job seekers and administrators alike.`}
            image={ileap}
            handlePopUp={handlePopUp}
            link="https://ileap-a49b9.web.app/"
            hubLink="https://github.com/AXODUS21/ILEAP"
            style={"white"}
            stack={["Firebase", "React", "CSS", "JS"]}
          />
        </div>
        <div className="2">
          <ProjectRadio
            title={"Amazon"}
            height={projectToOpen.Amazon}
            setProjectToOpen={setProjectToOpen}
            details={`This project is a clone of the Amazon website, developed with HTML, CSS, and JavaScript to replicate essential e-commerce functionalities. It uses JavaScript to render all items dynamically, allowing users to browse through a selection of products. The site features a shopping cart that tracks the quantity of items added, updating the total cost in real-time as users adjust their selections. Additionally, it provides an interactive user experience similar to Amazon's, enabling users to simulate product selection, cart management, and purchase calculations.`}
            image={amazon}
            handlePopUp={handlePopUp}
            link="https://axodus21.github.io/amazon-copy/amazon.html"
            hubLink="https://github.com/AXODUS21/amazon-copy"
            style={"black"}
            stack={["JS", "CSS", "HTML"]}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="1">
          <ProjectRadio
            title={"EMERSE"}
            height={projectToOpen.Emerse}
            setProjectToOpen={setProjectToOpen}
            details={`This project is a clone of the Amazon website, developed with HTML, CSS, and JavaScript to replicate essential e-commerce functionalities. It uses JavaScript to render all items dynamically, allowing users to browse through a selection of products. The site features a shopping cart that tracks the quantity of items added, updating the total cost in real-time as users adjust their selections. Additionally, it provides an interactive user experience similar to Amazon's, enabling users to simulate product selection, cart management, and purchase calculations.`}
            image={emerse2}
            handlePopUp={handlePopUp}
            link="https://emerse.netlify.app/"
            hubLink="https://github.com/AXODUS21/Emerse"
            style={"white"}
            stack={["React", "CSS", "MongoDB", "Vite"]}
          />
        </div>
        <div className="1">
          <ProjectRadio
            title={"Xelldealership"}
            height={projectToOpen.Xelldealership}
            setProjectToOpen={setProjectToOpen}
            details={`This car dealership website is built with React and TypeScript, featuring a personalized experience that recognizes the logged-in user. If the user has an admin account, they gain access to exclusive functionality, allowing them to add new cars to the inventory displayed on the store page. This admin-only access ensures that only authorized accounts can modify the car listings, maintaining security and control over the displayed content.`}
            image={xelldealership}
            handlePopUp={handlePopUp}
            link="https://xelldealership.netlify.app/"
            hubLink="https://github.com/AXODUS21/xelldealership"
            style={"white"}
            stack={["React", "CSS", "MongoDB", "Vite"]}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="1">
          <ProjectRadio
            title={"VAIN"}
            height={projectToOpen.Vain}
            setProjectToOpen={setProjectToOpen}
            details={`VAIN (Voice All In One) is a versatile website offering multiple utilities and entertainment tools—such as a calculator, a classic snake game, a digital diary, a to-do list, and a rock-paper-scissors game. Each feature is fully accessible through voice commands, creating a seamless, hands-free user experience that combines functionality and fun in a single platform.`}
            image={vain}
            handlePopUp={handlePopUp}
            link="https://vain21.netlify.app/"
            hubLink="https://github.com/AXODUS21/vain"
            style={"black"}
            stack={["React", "CSS", "MongoDB", "Vite"]}
          />
        </div>
        <div className="2">
          <ProjectRadio
            title={"GSEAS"}
            height={projectToOpen.Gseas}
            setProjectToOpen={setProjectToOpen}
            details={`GSEAS (Sea of Group Chats) is a dynamic platform designed for creating and managing group chats effortlessly. With GSEAS, users can set up unlimited group chats, engage in real-time conversations, and personalize each chat’s details—including the chat image, member list, and group name. The platform offers a seamless experience for social and collaborative interactions, making it easy to stay connected with multiple groups.`}
            image={gseas}
            handlePopUp={handlePopUp}
            link="https://gseas.vercel.app/"
            hubLink="https://github.com/AXODUS21/GSEAS"
            style={"white"}
            stack={["NextJS", "MongoDB", "CSS", "Tailwind"]}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsMobile