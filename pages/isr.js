import { URL } from "./api/api";
import { ImageContent } from "./image-component";

export const IncrementalStaticGeneration = ({ facts }) => {
  return (
    <>
      {/* <ImageContent title="ISR" /> */}
      {facts.map(({ fact, id }) => {
        return (
          <div key={id} className="items">
            <h4>{id}</h4>
            <p>{fact}</p>
          </div>
        );
      })}
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
    revalidate: 3,
  };
}

export default IncrementalStaticGeneration;
