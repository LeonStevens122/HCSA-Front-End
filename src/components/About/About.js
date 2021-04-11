import React from "react";
import { Container } from "@material-ui/core";

const About = () => {
  return (
    <>
      <h1>Human Capital Solutions</h1>

      <Container className="about__container">
        <p>
          Human Capital Solutions is a Specialist Recruitment Agency that
          specialises in Mining, Finance, Information Technology, Civil,
          Structural, Mechanical and Electrical Engineering, Construction,
          Medical and Manufacturing industries. We aim at been the only
          recruitment firm our clients have to deal with by having multiple
          divisions that specialize in their industries to provide a full
          recruitment solution for our clients. Human Capital Solutions has
          established itself as a renowned name in the HR realm by providing
          wide range of recruitment and selection services to diverse companies.
          Our team of expert consultants is dedicated towards magnifying the
          business potential of our clients by offering strategic HR services.{" "}
        </p>

        <p>
          We partner with our clients to expand their business potential by
          providing solutions in Executive Search & Selection, Middle Management
          Hiring, Project Based Hiring and Recruitment Process Outsourcing. With
          over 15 years of expertise in the domain we have been successfully
          able to deliver solutions for all kind of industry specific demands.
        </p>

        <p>
          We can align diversified and intricate HR needs of our clients by
          providing reliable and strategic staffing solutions. By understanding
          the significance of aligning talent strategy with business strategy we
          tend to offer workforce solution that drive businesses forward. Our
          capability in fast delivery has gained us the reputation of being a
          reliable and efficient executive search firm.
        </p>
        <a
          style={{ color: "black", alignSelf: "left" }}
          href="http://www.humancapital.africa/wp-content/uploads/2018/02/Human-Capital-Solution-Company-Profile.pdf"
        >
          Human Capital Solution Company Profile
        </a>
        <br />
        <br />
        <a
          style={{ color: "black", alignSelf: "left" }}
          href="http://www.humancapital.africa/wp-content/uploads/2018/02/Terms-and-Conditions.pdf"
        >
          Terms and Conditions
        </a>
      </Container>
    </>
  );
};

export default About;
