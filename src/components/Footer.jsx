import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/axellerosh_21/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/in/axellerosh-lubi/", icon: <FaLinkedin /> },
  { href: "https://www.facebook.com/axellerosh.lubi.9/", icon: <FaFacebook /> },
  { href: "https://github.com/AXODUS21", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#5542ff] py-4 px-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
            @ 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          XellTech
        </a>
      </div>
    </footer>
  );
};

export default Footer;