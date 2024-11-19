import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header isLandingPage={true} />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Link to='/video' style={{ width: "100%", textAlign: "center" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img
              src='/wax/1video.png'
              alt='Video section'
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </div>
          <span style={{ fontSize: "1.2rem" }}>video</span>
        </Link>

        <Link to='/about' style={{ width: "100%", textAlign: "center" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img
              src='/wax/2about.png'
              alt='About the project'
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </div>
          <span style={{ fontSize: "1.2rem" }}>about the project</span>
        </Link>

        <Link to='/workshops' style={{ width: "100%", textAlign: "center" }}>
          <div style={{ marginBottom: "1rem" }}>
            <img
              src='/wax/3workshops.png'
              alt='Workshops'
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </div>
          <span style={{ fontSize: "1.2rem" }}>workshops</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
};
