import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export const LandingPage = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const customStyles = {
    playerContainer: {
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
    },
    title: {
      fontFamily: "serif",
      fontSize: "1.5rem",
      marginBottom: "1rem",
      color: "#1a1a1a",
    },
    controlButton: {
      width: "120px",
      height: "60px",
      background: "#f0eee9",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    progressContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    progressBar: {
      flex: 1,
      height: "4px",
      background: "#000",
      position: "relative",
    },
    progressFill: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      background: "#B8860B",
      transition: "width 0.1s linear",
    },
    duration: {
      fontSize: "1rem",
      color: "#1a1a1a",
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header isLandingPage={true} />

      <div style={customStyles.playerContainer}>
        <h2 style={customStyles.title}>listen to the video sound</h2>
        <button onClick={togglePlay} style={customStyles.controlButton}>
          {isPlaying ? (
            <svg width='40' height='40' viewBox='0 0 24 24' fill='#1a1a1a'>
              <rect x='6' y='4' width='4' height='16' />
              <rect x='14' y='4' width='4' height='16' />
            </svg>
          ) : (
            <svg width='40' height='40' viewBox='0 0 24 24' fill='#1a1a1a'>
              <path d='M8 5v14l11-7z' />
            </svg>
          )}
        </button>
        <div style={customStyles.progressContainer}>
          <div style={customStyles.progressBar}>
            <div
              style={{
                ...customStyles.progressFill,
                width: `${progress}%`,
              }}
            />
          </div>
          <span style={customStyles.duration}>{formatTime(duration)}</span>
        </div>
        <audio ref={audioRef} style={{ display: "none" }}>
          <source src='/audio/melting.mp3' type='audio/mpeg' />
        </audio>
      </div>

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
