// components/Header.jsx
import { Link } from "react-router-dom";

export const Header = ({ isLandingPage = false }) => {
  return (
    <header className='p-5 border-b shadow-sm flex flex-col gap-8'>
      <Link to='/' className='inline-block w-full'>
        <img
          src={isLandingPage ? "/logo/all.png" : "/logo/main.png"}
          alt='Logo'
          className='w-full object-contain'
        />
      </Link>

      <img
        src={"/logo/title.svg"}
        alt='Logo'
        className='w-full object-contain pl-2'
      />
    </header>
  );
};
