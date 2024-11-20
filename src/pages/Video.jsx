// pages/Video.jsx
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Video = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Video container with responsive aspect ratio */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            marginBottom: "2rem",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            src='https://www.youtube.com/embed/Kyc-cVXQe24'
            title='Melting Through'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>

        {/* Text content with improved typography */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontSize: "1.1rem",
          }}
        >
          <p style={{ marginBottom: "2rem" }}>
            "Realizing that there are lots of different temporality formats is
            basically what ecological awareness is. It's equivalent to
            acknowledging in a deep way the existence of beings that aren't you,
            with whom you coexist. Once you've done that, you can't
            un-acknowledge it. There's no going back." <br />― Timothy Morton
          </p>

          <p>
            we turn to it
            <br />
            to fluidity flows like scorching wax
            <br />
            towards a dynamic identity
            <br />
            it pours into me
            <br />
            towards intertwinement
            <br />
            it slides
            <br />
            towards an overlapping
            <br />
            we perversely use darwin to our advantage
            <br />
            evolution has always meant a branched out becoming
            <br />
            life arises from life all creatures and non-beings and things and
            entities
            <br />
            and organisms and phenomena and and and we are in coexistence
            <br />
            nothing exists without another and indeed nothing comes from nothing{" "}
            <br />
            we don't swear to that however
            <br />
            what theorists write about we feel in our bile
            <br />
            in the stomach the ancient truth is so self-evident <br />
            <br />
            space timeless future present past
            <br />
            we turn and turn an endless spiral that has meaning
            <br />
            the eternal search
            <br />
            where all beings species entities flow
            <br />
            coexistence interspecies connection we exist in relation to everyone
            and everything <br />
            <br />
            around us communication between us as an energy field the waves defy
            gravity
            <br />
            we speak with words we speak with our touches we show with movement
            we show with our thoughts we show with our creations
            <br />
            all can be used for movement forward and backwards and in a circle
            and in a spiral
            <br />
            new old ancient technologies but new ones that we are reviving
            <br />
            they become part of our shared reality
            <br />
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
