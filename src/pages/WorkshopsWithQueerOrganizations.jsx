import { Header } from "../components/Header";

export const WorkshopsWithQueerOrganizations = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>
          Workshops with Queer Organizations
        </h1>
        <div className='grid gap-6'>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-3'>
              Community Empowerment
            </h2>
            <p className='text-gray-600'>
              Programs focused on strengthening LGBTQ+ community initiatives.
            </p>
          </div>
          <div className='p-6 border rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-3'>Advocacy Training</h2>
            <p className='text-gray-600'>
              Workshops on effective advocacy and community organization.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
