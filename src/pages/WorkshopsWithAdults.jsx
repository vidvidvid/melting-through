import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const WorkshopsWithAdults = () => {
  return (
    <div>
      <Header customImage='/logo/workshops-adults.svg' />
      <main className='p-8'>
        <div className='grid gap-6'>
          <img
            src='/photo/adults0.png'
            alt='About the project'
            className='w-full object-cover'
          />
          <p className='text-gray-600'>
            Pouring hot beeswax: The participants will be able to pour beeswax
            into the water to create shapes.  They will try to make sense of
            them, what this shape represents to them, try to contextualize or
            interpret them in their own way and how the shapes connect to their
            own life. Everyone will get a sheet of paper to write what it
            reminds them of. We will share it among ourselves and everyone will
            share their own story, a snippet of their life or just a creative
            outlet.  Everyone's shape is an individual experience, they share
            with us the story of their shape. We are listening. In a circle. Add
            them to the structure at the end. It’s a practice of listening and
            respecting others’ points of view.
          </p>
          <img
            src='/photo/adults1.jpg'
            alt='About the project'
            className='w-full object-cover'
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
