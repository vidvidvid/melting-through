import { Header } from "../components/Header";

export const Video = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-3xl font-bold mb-6'>Video Gallery</h1>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='aspect-video bg-gray-100 rounded-lg flex items-center justify-center'>
            <p className='text-gray-500'>Video placeholder 1</p>
          </div>
          <div className='aspect-video bg-gray-100 rounded-lg flex items-center justify-center'>
            <p className='text-gray-500'>Video placeholder 2</p>
          </div>
        </div>
      </main>
    </div>
  );
};
