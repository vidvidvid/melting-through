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
            un-acknowledge it. There's no going back." ― Timothy Morton we turn
            to it to fluidity towards dynamic identity entanglement overlap we
            perversely use Darwin to our advantage evolution has always meant
            branched becoming life comes from life all creatures and non-beings
            and things and entities and organisms and phenomena and and and- we
            are in coexistence nothing exists without another and nothing comes
            from nothing what theorists write about we feel in our bile in our
            stomach an ancient truth so self-evident we build live breathe
            believe our truth intertwined open source universal hormones broad
            communities
          </p>

          <p>
            this is what we need this is what we want [Mori] space timeless
            future present past we turn and turn an endless spiral that makes
            sense eternal search where all beings species entities flow
            coexistence interspecies connection we exist in our relation to all
            and everything around us the communication between us as an energy
            field waves defying gravity we speak with words with touch with
            movement with thoughts with our creations all can be used for beauty
            and abuse all can be used to move back and forth in a spiral new old
            technologies that we are reviving they become part of our shared
            reality
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
