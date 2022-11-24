import { URL } from "./api/api";
import { ImageContent } from "./image-component";

export const ServerSideRendering = ({ facts }) => {
  return (
    <>
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

export async function getServerSideProps() {
  const response = await fetch(URL);
  const facts = await response.json();

  return {
    props: {
      facts,
    },
  };
}

export default ServerSideRendering;
