import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const Workshops = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>All Workshops</h1>
        <div className='grid gap-6'>
          <Link
            to='/workshops/adults'
            className='p-6 border rounded-lg shadow-sm hover:shadow-md transition'
          >
            <h2 className='text-xl font-semibold mb-3'>Adult Workshops</h2>
            <p className='text-gray-600'>
              Professional and personal development programs
            </p>
          </Link>
          <Link
            to='/workshops/children'
            className='p-6 border rounded-lg shadow-sm hover:shadow-md transition'
          >
            <h2 className='text-xl font-semibold mb-3'>Children's Workshops</h2>
            <p className='text-gray-600'>
              Educational and creative activities for young minds
            </p>
          </Link>
          <Link
            to='/workshops/queer-organizations'
            className='p-6 border rounded-lg shadow-sm hover:shadow-md transition'
          >
            <h2 className='text-xl font-semibold mb-3'>Queer Organizations</h2>
            <p className='text-gray-600'>
              Specialized programs for LGBTQ+ organizations
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};
