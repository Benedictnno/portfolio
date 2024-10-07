import {
  AiFillPhone,
  AiFillMail,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import CopyText from './Copy';
const Contact = () => {
    
    const data = [
      {
        text: "benedictnnaoma0@gmail.com",
        icon: <AiFillMail />,
        title: "Email Address",
      },
      { text: "08182811692", icon: <AiFillPhone />, title: "Phone Number" },
      {
        text: "linkedin.com/in/benedict-nnaoma-73285a242",
        link: "linkedin.com/in/benedict-nnaoma-73285a242",
        icon: <AiFillLinkedin />,
        title: "Linkedin Profile",
      },
      {
        text: "https://github.com/Benedictnno",
        link: "https://github.com/Benedictnno",
        icon: <AiOutlineGithub />,
        title: "Github",
      },
    ];
    
  return (
    <div className="copy" id="contact">
      {data.map((copy) => {
        return <CopyText {...copy} key={copy.text} />;
      })}
    </div>
  );
      }
export default Contact
