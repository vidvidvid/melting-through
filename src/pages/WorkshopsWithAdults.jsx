import { Header } from "../components/Header";

export const WorkshopsWithAdults = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>Workshops with Adults</h1>
        <div className='grid gap-6'>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-3'>
              Professional Development
            </h2>
            <p className='text-gray-600'>
              Specialized workshops focused on career growth and skill
              development.
            </p>
          </div>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-3'>Community Building</h2>
            <p className='text-gray-600'>
              Sessions designed to strengthen community bonds and social
              connections.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
