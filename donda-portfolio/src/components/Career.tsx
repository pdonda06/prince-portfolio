import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Agevole Innovation Pvt. Ltd., Surat</h5>
              </div>
              <h3>May 2024 - Jul 2024</h3>
            </div>
            <p>
              Designed and implemented responsive interfaces with HTML, CSS, and
              JavaScript, and used React to build dynamic web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Retech Retailer Technology Pvt. Ltd., Mumbai</h5>
              </div>
              <h3>Feb 2025 - May 2025</h3>
            </div>
            <p>
              Built end-to-end MERN applications with cross-functional teams,
              delivered responsive React components, and customized Shopify themes
              for stronger performance and user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>La Net Team Software Solutions Pvt. LTD., Surat</h5>
              </div>
              <h3>Jan 2026 - Present</h3>
            </div>
            <p>
              Developing full-stack products using MERN and contributing to a
              Next.js application across both frontend and backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
