import { URL } from "./api/api";

export const IncrementalStaticGeneration = ({ facts }) => {
  return (
    <>
      <h1>ISR</h1>
      <div>
        <h3>CAT FACTS</h3>
        {facts.map(({ fact, id }) => {
          return (
            <div key={id} className="items">
              <h4>{id}</h4>
              <p>{fact}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(URL);
  const facts = await response.json();

  return {
    props: {
      facts,
    },
    revalidate: 15,
  };
}

export default IncrementalStaticGeneration;
