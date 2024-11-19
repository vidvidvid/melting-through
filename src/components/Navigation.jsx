import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to='/workshops/adults'>Workshops with adults</Link>
      </li>
      <li>
        <Link to='/workshops/children'>Workshops with children</Link>
      </li>
      <li>
        <Link to='/workshops/queer-organizations'>
          Workshops with queer organizations
        </Link>
      </li>
      <li>
        <Link to='/workshops'>Workshops</Link>
      </li>
      <li>
        <Link to='/about'>About the project</Link>
      </li>
      <li>
        <Link to='/video'>Video</Link>
      </li>
      <li>
        <Link to='/'>Landing page</Link>
      </li>
    </ul>
  </nav>
);
