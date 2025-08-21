import mainStyles from "../styles/main.module.css";
import myImg from "../../public/gato.jpg";
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
import { MdEmail } from "react-icons/md";

function Main() {
  return (
    <div className={mainStyles.mainContainer}>
      <div
        className={mainStyles.shape + " " + mainStyles.circle}
        style={{ top: "5%", left: "10%", width: "100px", height: "100px" }}
      ></div>
      <div
        className={mainStyles.shape + " " + mainStyles.square}
        style={{ bottom: "10%", right: "15%", width: "120px", height: "120px" }}
      ></div>
      <div
        className={mainStyles.shape + " " + mainStyles.triangle}
        style={{ top: "20%", right: "20%" }}
      ></div>
      <div
        className={mainStyles.shape + " " + mainStyles.ellipse}
        style={{ bottom: "25%", left: "5%" }}
      ></div>
      <div
        className={mainStyles.shape + " " + mainStyles.circle}
        style={{ top: "50%", left: "50%", width: "80px", height: "80px" }}
      ></div>
      <div
        className={mainStyles.shape + " " + mainStyles.square}
        style={{ top: "70%", right: "10%", width: "90px", height: "90px" }}
      ></div>
      <section className={mainStyles.introSection}>
        <h1>
          Olá, eu sou <span>Isac</span> 🧑‍💻
        </h1>
        <p>Desenvolvedor Frontend | Backend</p>
        <button>Ver projetos</button>
      </section>
      <section className={mainStyles.imageSection}>
        <img src={myImg} alt="Imagem de Isac" />
        <div className={mainStyles.aboutMe}>
          <h2>Sobre mim</h2>
          <p>
            Sou um desenvolvedor apaixonado por tecnologia, atualmente formado
            em Engenharia de Computação pela Universidade Federal do Ceará
            (UFC). Tenho 23 anos e foco em construir soluções modernas e
            funcionais, com experiência em desenvolvimento web fullstack, mobile
            e machine learning. Busco sempre aprender novas tecnologias e
            enfrentar desafios que me façam evoluir como profissional.
          </p>
        </div>
      </section>
      <section className={mainStyles.skillsAndFormationSection}>
        <div className={mainStyles.rightSide}>
          <h2>
            <span>Skills</span>
          </h2>
          <ul>
            <li>
              <IoLogoJavascript className={mainStyles.icon} color="#F7DF1E" />
            </li>
            <li>
              <FaHtml5 className={mainStyles.icon} color="#E34F26" />
            </li>
            <li>
              <FaCss3Alt className={mainStyles.icon} color="#1572B6" />
            </li>
            <li>
              <FaReact className={mainStyles.icon} color="#61DAFB" />
            </li>
            <li>
              <SiTypescript className={mainStyles.icon} color="#3178C6" />
            </li>
            <li>
              <FaGithub className={mainStyles.icon} color="#181717" />
            </li>
            <li>
              <FaNodeJs className={mainStyles.icon} color="#339933" />
            </li>
            <li>
              <SiMongodb className={mainStyles.icon} color="#47A248" />
            </li>
          </ul>
        </div>

        <div className={mainStyles.leftSide}>
          <h2>
            <span>Formação acadêmica</span>
          </h2>
          <ul className={mainStyles.skillsList}>
            <li>
              Ensino médio profissionalizate: <span>Redes de Computadores</span>{" "}
              (3 anos de duração)
            </li>
            <li>
              Graduação: <span>Engenharia de Computação</span> (Universidade
              Federal do Ceará)
            </li>
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

      <section className={mainStyles.experienceSection}>
        <h2>Experiências profissionais</h2>
        <div className={mainStyles.experienceList}>
          <div className={mainStyles.experienceItem}>
            <h3>Empresa 1</h3>
            <p>Cargo: Desenvolvedor Frontend</p>
            <p>Duração: 1 ano</p>
          </div>
          <div className={mainStyles.experienceItem}>
            <h3>Empresa 2</h3>
            <p>Cargo: Desenvolvedor Backend</p>
            <p>Duração: 6 meses</p>
          </div>
        </div>
      </section>

      <section className={mainStyles.contactSection}>
        <h2>Contato</h2>
        <div className={mainStyles.contactInfo}>
          <p>Você pode me encontrar:</p>
          <ul className={mainStyles.socialLinks}>
            <li>
              <FaGithub className={mainStyles.icon} />
            </li>
            <li>
              <FaInstagram className={mainStyles.icon} />
            </li>
            <li>
              <FaLinkedin className={mainStyles.icon} />
            </li>
            <li>
              <MdEmail className={mainStyles.icon} />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
