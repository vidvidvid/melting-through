import { Header } from "../components/Header";

export const WorkshopsWithChildren = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>Workshops with Children</h1>
        <div className='grid gap-6'>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-3'>Creative Expression</h2>
            <p className='text-gray-600'>
              Fun and engaging activities that encourage creativity and
              self-expression.
            </p>
          </div>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-3'>
              Learning Through Play
            </h2>
            <p className='text-gray-600'>
              Interactive workshops that combine education with playful
              activities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
