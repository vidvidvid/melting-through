// components/Header.jsx
import { Link } from "react-router-dom";

export const Header = ({
  isLandingPage = false,
  customImage = "/logo/title.svg",
}) => {
  return (
    <header className='p-5 flex flex-col gap-8'>
      <Link to='/' className='inline-block w-full'>
        <img
          src={isLandingPage ? "/logo/all.png" : "/logo/main.png"}
          alt='Logo'
          className={isLandingPage ? "w-full object-contain" : "w-1/4"}
        />
      </Link>

      <img
        src={customImage}
        alt='Logo'
        className='w-full object-contain pl-2'
      />
    </header>
  );
};
