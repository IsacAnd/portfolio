import mainStyles from '../styles/main.module.css';
import myImg from '../../public/gato.jpg';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"


function Main() {
  return (
    <div className={mainStyles.mainContainer}>
      <section className={mainStyles.introSection}>
        <h1>Olá, eu sou <span>Isac</span></h1>
        <p>Desenvolvedor Frontend | Backend</p>
        <button>Ver projetos</button>
      </section>
      <section className={mainStyles.imageSection}>
        <img src={myImg} alt="Imagem de Isac" />
        <div className={mainStyles.aboutMe}>
            <h2>Sobre mim</h2>
            <p>
                Sou um desenvolvedor apaixonado por tecnologia, atualmente cursando Engenharia de Computação na Universidade Federal do Ceará (UFC). Tenho 23 anos e foco em construir soluções modernas e funcionais, com experiência em desenvolvimento web fullstack, mobile e machine learning. Busco sempre aprender novas tecnologias e enfrentar desafios que me façam evoluir como profissional.
            </p>
        </div>
      </section>
      <section className={mainStyles.skillsAndFormationSection}>
        
        <div className={mainStyles.rightSide}>
            <h2>Skills</h2>
            <ul >
                <li><FaHtml5 className={mainStyles.icon} /></li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Machine Learning</li>
                <li>HTML & CSS</li>
            </ul>
        </div>    
        
        <div className={mainStyles.leftSide}>
            <h2>Formação</h2>
            <ul className={mainStyles.skillsList}>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Machine Learning</li>
                <li>HTML & CSS</li>
            </ul>
        </div>
      </section>

      <section className={mainStyles.projectsSection}>
        <h2>Projetos</h2>
        <div className={mainStyles.projectList}>
          <div className={mainStyles.projectItem}>
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
          </div>
          <div className={mainStyles.projectItem}>
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className={mainStyles.projectItem}>
            <h3>Projeto 3</h3>
            <p>Descrição do projeto 3.</p>
          </div>
          <div className={mainStyles.projectItem}>
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
          </div>
          <div className={mainStyles.projectItem}>
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className={mainStyles.projectItem}>
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          
        </div>
      </section>

      <section className={mainStyles.contactSection}>
        <h2>Contato</h2>
        <div>
          <p>Você pode me encontrar:</p>
          <ul className={mainStyles.socialLinks}>
            <li><FaGithub className={mainStyles.icon} /> GitHub</li>
            <li><FaInstagram className={mainStyles.icon} /> Instagram</li>
            <li><FaLinkedin className={mainStyles.icon} /> Linkedin</li>
            <li><MdEmail className={mainStyles.icon} /> Email</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;