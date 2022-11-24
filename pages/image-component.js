import Image from "next/image";

export const ImageContent = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>CAT FACTS</h3>
      <div className="image">
        <Image
          src="https://movetexas.org/wp-content/uploads/2021/03/IMG_1974.jpg"
          height={80}
          alt="Cat okay meme"
        />
      </div>
    </>
  );
};

export default ImageContent;
