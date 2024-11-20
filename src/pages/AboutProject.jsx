import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AboutProject = () => {
  return (
    <div>
      <Header />
      <main className='p-8'>
        <h1 className='text-2xl font-bold mb-4'>About the project</h1>
        <p className='mb-4'>
          About the project Melting through is a video installation and
          participatory project that weaves together the lives of humans,
          non-human entities, and materials through the fluid lens of queer
          ontology. Beeswax, emerges as a living, shape-shifting material,
          symbolizing transformation, hybridity, and non-dualistic thinking.
          Projected images of bees, flowers, and organic terrains merge with 3D
          scans of wax forms, unfolding on a wooden surface framed by wax
          itself, blurring the lines between subject and object. The project
          invites participants to shape wax forms together, evoking the communal
          effort of bees constructing a hive. Melting through dissolves the
          boundaries of hierarchy and dualism, inviting us to embrace
          interdependence—where biodiversity and social diversity meet, each
          vital and fragile. It offers space for reflection and collaboration,
          calling us to nurture biophilic connections in the face of ecological
          and societal shifts, to build not just structures, but shared futures
          rooted in care.  XenoScapers collective Beti Frim, Ines Sekač, Mori
          Sikora, Katarina Babič Derenda Material/technique Video installation;
          3D scans; wood, wire, beeswax, natural pigments and plants 2024About
          the project Melting through is a video installation and participatory
          project that weaves together the lives of humans, non-human entities,
          and materials through the fluid lens of queer ontology. Beeswax,
          emerges as a living, shape-shifting material, symbolizing
          transformation, hybridity, and non-dualistic thinking. Projected
          images of bees, flowers, and organic terrains merge with 3D scans of
          wax forms, unfolding on a wooden surface framed by wax itself,
          blurring the lines between subject and object. The project invites
          participants to shape wax forms together, evoking the communal effort
          of bees constructing a hive. Melting through dissolves the boundaries
          of hierarchy and dualism, inviting us to embrace interdependence—where
          biodiversity and social diversity meet, each vital and fragile. It
          offers space for reflection and collaboration, calling us to nurture
          biophilic connections in the face of ecological and societal shifts,
          to build not just structures, but shared futures rooted in care. 
          XenoScapers collective Beti Frim, Ines Sekač, Mori Sikora, Katarina
          Babič Derenda Material/technique Video installation; 3D scans; wood,
          wire, beeswax, natural pigments and plants 2024
        </p>
        <p>2024</p>
        <img
          src='/photo/about1.JPG'
          alt='About the project'
          className='w-full object-cover my-4'
        />
        <img
          src='/photo/about2.JPEG'
          alt='About the project'
          className='w-full object-cover mb-4'
        />
        <img
          src='/photo/about3.JPG'
          alt='About the project'
          className='w-full object-cover'
        />
      </main>

      <Footer />
    </div>
  );
};
