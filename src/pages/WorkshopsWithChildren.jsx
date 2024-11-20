import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const WorkshopsWithChildren = () => {
  return (
    <div>
      <Header customImage='/logo/workshops-children.svg' />
      <main className='p-8'>
        <div className='grid gap-6'>
          <img
            src='/photo/children0.png'
            alt='About the project'
            className='w-full object-cover'
          />
          <p>
            Encouraging creativity through learning about bees and environment,
            diversity and open-mindedness. Through storytelling we want to talk
            to the kids about how to be nice and how to hold space for each
            other. How to respect others and their truth, and that its okay to
            be different, be yourself. We encourage it. “Just like a bee is
            different from a wasp, a chamomile is
            <br /> different from a bluebell, all contributing to a greater
            biodiversity, so do you.” The goal is to create various shapes, in
            any form each child wishes to make, whatever they want, be it a bear
            with wings, a shark with legs, flowers or anything else, and to add
            them to our structure on wall. They can make another to take home
            with them. Warming up the wax: Children will receive pieces of
            beeswax to hold in their hands. The warmth will make it softer and
            easier to work with. We can pre-warm it as well.
            <br />
          </p>
          <img
            src='/photo/children1.jpg'
            alt='About the project'
            className='w-full object-cover'
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
