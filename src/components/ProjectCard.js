import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, pdfLink, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={pdfLink}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
          </div>
        </div>
      </a>
    </Col>
  );
};
