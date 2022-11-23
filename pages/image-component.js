export const ImageContent = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>CAT FACTS</h3>
      <div className="image">
        <img
          src="https://movetexas.org/wp-content/uploads/2021/03/IMG_1974.jpg"
          height={80}
        />
      </div>
    </>
  );
};
