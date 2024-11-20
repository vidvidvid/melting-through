import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Workshops = () => {
  return (
    <div>
      <Header customImage='/logo/workshops.svg' />
      <main className='p-8'>
        <div className='grid gap-6'>
          <Link
            to='/workshops/queer-organizations'
            style={{ width: "100%", textAlign: "center" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <img
                src='/wax/workshops-adults.png'
                alt='Video section'
                style={{
                  width: "40%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <span style={{ fontSize: "1rem" }}>
              Workshops with <br />
              queer organisations
            </span>
          </Link>

          <Link
            to='/workshops/children'
            style={{ width: "100%", textAlign: "center" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <img
                src='/wax/workshops-children.png'
                alt='About the project'
                style={{
                  width: "40%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <span style={{ fontSize: "1rem" }}>
              Workshops with children/
              <br />
              creation of wax creatures
            </span>
          </Link>

          <Link
            to='/workshops/adults'
            style={{ width: "100%", textAlign: "center" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <img
                src='/wax/workshops-queer.png'
                alt='Workshops'
                style={{
                  width: "40%",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <span style={{ fontSize: "1rem" }}>
              Workshops with
              <br /> adults/elders
            </span>
          </Link>
          <p>
            The workshops serve as a place where anyone interested can learn a
            little about beeswax but first and foremost about interconnectedness
            within different species and ecosystems. The main objective of the
            workshops with the audience is to learn about the meaning of wax and
            to create shapes using different techniques of pouring and using
            wax, visualizing interspecies connections and understanding them.
          </p>
        </div>
        <img
          src='/photo/workshops1.jpg'
          alt='About the project'
          className='w-full object-cover my-4'
        />
        <img
          src='/photo/workshops2.jpg'
          alt='About the project'
          className='w-full object-cover mb-4'
        />
      </main>
      <Footer />
    </div>
  );
};
