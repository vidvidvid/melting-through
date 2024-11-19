import { Header } from "../components/Header";

export const AboutProject = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-2xl font-bold mb-4'>About the project</h1>
        <p className='mb-4'>
          <strong>Melting through</strong> is a video installation and
          participatory project that weaves together the lives of humans,
          non-human entities, and materials through the fluid lens of queer
          ontology. Beeswax emerges as a living, shape-shifting material,
          symbolizing transformation, hybridity, and non-dualistic thinking.
          Projected images of bees, flowers, and organic terrains merge with 3D
          scans of wax forms, unfolding on a wooden surface framed by wax
          itself, blurring the lines between subject and object.
        </p>
        <p className='mb-4'>
          The project invites participants to shape wax forms together, evoking
          the communal effort of bees constructing a hive.{" "}
          <strong>Melting through</strong> dissolves the boundaries of hierarchy
          and dualism, inviting us to embrace interdependence—where biodiversity
          and social diversity meet, each vital and fragile. It offers space for
          reflection and collaboration, calling us to nurture biophilic
          connections in the face of ecological and societal shifts, to build
          not just structures, but shared futures rooted in care.
        </p>
        <h2 className='text-xl font-semibold mt-6 mb-2'>
          XenoScapers collective
        </h2>
        <p className='mb-4'>
          Beti Frim, Ines Sekač, Mori Sikora, Katarina Babič Derenda
        </p>
        <h2 className='text-xl font-semibold mt-6 mb-2'>Material/technique</h2>
        <p className='mb-4'>
          Video installation; 3D scans; wood, wire, beeswax, natural pigments
          and plants
        </p>
        <p className='mt-6'>
          <strong>2024</strong>
        </p>
      </main>
    </div>
  );
};
