import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const WorkshopsWithQueerOrganizations = () => {
  return (
    <div>
      <Header customImage='/logo/workshops-queer.svg' />
      <main className='p-8'>
        <div className='grid gap-6'>
          <img
            src='/photo/queer0.png'
            alt='About the project'
            className='w-full object-cover'
          />
          <p>
            In active participation and conversation, we want to give voice to
            the Slovenian queer community and the representations of individuals
            involved in a complex web of relations. We want to invite them to
            visualize their connection to biennale’s theme and their vision of
            it. In this way, we would build together a visual scheme for
            organizing relations within the community. To create together just
            as bees build their hive. We would like to start the workshop with a
            few words about queer ecology and wax as a living material. By
            actively participating in the conversation, we want to explore the
            position of individuals in the community and in the wider society.
            We would open the conversation with questions such as; How do you
            perceive your role, your place in the queer* community? Do you wish
            for changes? <br />
            We want to emphasize the importance of every being, non-being,
            organism for the rich diversity of society, just as biodiversity is
            important.
            <br /> We invited Moja Mavrica, TransAkcija, Legebitra, DIH, to
            participate and post on their social media so that people can join.
            They are all excited to participate. TransAkcija even invited us to
            host a workshop at one of their events.
            <br />
          </p>
          <img
            src='/photo/queer1.jpg'
            alt='About the project'
            className='w-full object-cover'
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
