import React,{useState} from 'react'
import vain from "../photos/projects/vain (1).png";
import gseas from "../photos/projects/gseas (1).png";
import gseas2 from "../photos/projects/gseas (2).png";
import gseas3 from "../photos/projects/gseas (3).png";
import emerse1 from "../photos/projects/Emerse (1).png";
import emerse2 from "../photos/projects/Emerse (2).png";
import emerse3 from "../photos/projects/Emerse (3).png";
import amazon from "../photos/projects/amazon.png";
import ileap from "../photos/projects/ileap.png";
import xelldealership from "../photos/projects/xelldealership.png";
import '../css/projects.css'
import ProjectComponent from '../components/ProjectComponent';
import ProjectsMobile from '../components/projectsMobile';
import PopUp from '../components/PopUp';
import ViewMore from '../components/ViewMore';
 

const Projects = () => {
  const [popUp, setpopUp] = useState(false)
  const [details, setDetails] = useState({
    image: '',
    title: '',
    techStacks: [],
    TextStyle:'',
    hubLink: '',
    link: '',
    description: '', 
  })

  const handlePopUp = (image, title,stack,style, description, link, hublink) => {
    setpopUp(false);
    console.log("clicked")
    if (!popUp) {
      setDetails({
        image: image,
        title: title,
        description: description,
        techStacks: stack,
        TextStyle: style,
        link,
        hubLink: hublink,
      });
      setpopUp(true);
    } else {
      setTimeout(() => {
        setpopUp(true);
        setDetails({
          image1: image,
          title: title,
          description: description,
        });
      }, 1000);
    }
  };

  const PROJECT_1_TEXT = `GSEAS (Sea of Group Chats) is a dynamic platform designed for creating and managing group chats effortlessly. With GSEAS, users can set up unlimited group chats, engage in real-time conversations, and personalize each chat’s details—including the chat image, member list, and group name. The platform offers a seamless experience for social and collaborative interactions, making it easy to stay connected with multiple groups.`;

  const PROJECT_6_TEXT = `A MERN stack project. this website is a e-ccomerce type of
                website fully responsive and even has PAYPAL payment
                integration. It has an authentication function where users can
                make an account to save their purchases in a cart and all of
                those data are saved in a database.`;

    
  return (
    <div className="projects-container">
      <h1 className="font-bold text-2xl">Projects</h1>
      <PopUp popUp={popUp} details={details} setPopUp={setpopUp} />

      {/*MOBILE VIEW */}

      <div className="xl:hidden flex">
        <ProjectsMobile handlePopUp={handlePopUp} />
      </div>

      {/*PC VIEW*/}

      <div className="project-box1 xl:flex hidden">
        <div className="top">
          <div className="project1 project mb-7">
            <div className="project-p grid pl-7 pr-5">
              <p>{PROJECT_1_TEXT}</p>
              <div
                className="flex justify-start"
                onClick={() =>
                  handlePopUp(
                    gseas,
                    "VAIN",
                    ["NextJS", "MongoDB", "CSS", "Tailwind"],
                    "white",
                    PROJECT_1_TEXT,
                    "https://gseas.vercel.app/",
                    "https://github.com/AXODUS21/GSEAS"
                  )
                }
              >
                <ViewMore />
              </div>
            </div>
            <div className="spinning-img-container">
              <img className="spinning-img" src={gseas} alt="vain" />
              <img className="spinning-img" src={gseas2} alt="vain" />
              <img className="spinning-img" src={gseas3} alt="vain" />
              <img className="spinning-img" src={gseas} alt="vain" />
              <img className="spinning-img" src={gseas2} alt="vain" />
              <img className="spinning-img" src={gseas3} alt="vain" />
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="project2">
            <ProjectComponent
              handlePopUp={handlePopUp}
              title={"ILEAP"}
              image={ileap}
              stack={["Firebase", "React", "CSS", "JS"]}
              style={"white"}
              link="https://ileap-a49b9.web.app/"
              hubLink="https://github.com/AXODUS21/ILEAP"
              text={`ILEAP is a platform designed to help students and graduates find jobs and internships. It offers features like student profiles, job search, and application progress tracking, making it easier for users to connect with employers. The platform also includes analytics and reporting tools for administrators, providing insights into user engagement and success rates. With these resources, ILEAP supports students in building their careers effectively. It’s an all-in-one solution for job seekers and administrators alike.`}
            />
          </div>
          <div className="project3">
            <ProjectComponent
              handlePopUp={handlePopUp}
              title="Amazon Copy"
              image={amazon}
              stack={["JS", "CSS", "HTML"]}
              style={"black"}
              hubLink={"https://github.com/AXODUS21/amazon-copy"}
              link={"https://axodus21.github.io/amazon-copy/amazon.html"}
              text={`This project is a clone of the Amazon website, developed with HTML, CSS, and JavaScript to replicate essential e-commerce functionalities. It uses JavaScript to render all items dynamically, allowing users to browse through a selection of products. The site features a shopping cart that tracks the quantity of items added, updating the total cost in real-time as users adjust their selections. Additionally, it provides an interactive user experience similar to Amazon's, enabling users to simulate product selection, cart management, and purchase calculations.`}
            />
          </div>
        </div>
      </div>

      <div className="project-box2 xl:flex hidden">
        <div className="top">
          <div className="project4">
            <ProjectComponent
              handlePopUp={handlePopUp}
              title="Xelldealership"
              stack={["React", "Typescript", "Firebase", "CSS", "Vite"]}
              style={"white"}
              link={"https://xelldealership.netlify.app/"}
              hubLink={"https://github.com/AXODUS21/xelldealership"}
              image={xelldealership}
              text={`This car dealership website is built with React and TypeScript, featuring a personalized experience that recognizes the logged-in user. If the user has an admin account, they gain access to exclusive functionality, allowing them to add new cars to the inventory displayed on the store page. This admin-only access ensures that only authorized accounts can modify the car listings, maintaining security and control over the displayed content.`}
            />
          </div>
          <div className="project5">
            <ProjectComponent
              title="VAIN"
              image={vain}
              handlePopUp={handlePopUp}
              stack={["React", "CSS", "MongoDB", "Vite"]}
              style={"black"}
              link={"https://vain21.netlify.app/"}
              hubLink={"https://github.com/AXODUS21/vain"}
              text={
                "VAIN (Voice All In One) is a versatile website offering multiple utilities and entertainment tools—such as a calculator, a classic snake game, a digital diary, a to-do list, and a rock-paper-scissors game. Each feature is fully accessible through voice commands, creating a seamless, hands-free user experience that combines functionality and fun in a single platform."
              }
            />
          </div>
        </div>
        <div className="bottom">
          <div className="project6 project">
            <div className="spinning-img-container">
              <img className="spinning-img2" src={emerse1} alt="vain" />
              <img className="spinning-img2" src={emerse2} alt="vain" />
              <img className="spinning-img2" src={emerse3} alt="vain" />
              <img className="spinning-img2" src={emerse1} alt="vain" />
              <img className="spinning-img2" src={emerse2} alt="vain" />
              <img className="spinning-img2" src={emerse3} alt="vain" />
            </div>
            <div className="project-p grid pr-7 pl-5">
              <p>{PROJECT_6_TEXT}</p>
              <div
                className="flex justify-end"
                onClick={() =>
                  handlePopUp(
                    emerse3,
                    "Emerse",
                    ["React", "CSS", "MongoDB", "Vite"],
                    "black",
                    PROJECT_6_TEXT,
                    "https://emerse.netlify.app/",
                    "https://github.com/AXODUS21/Emerse"
                  )
                }
              >
                <ViewMore />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects