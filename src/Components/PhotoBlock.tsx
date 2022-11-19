const PhotoBlock = (props: any) => {
  return (
    <div className="h-full border-2">
      <img
        src={props.imgURL}
        alt="Photo by Claudio Schwarz on Unsplash"
        className="inset-0 h-full object-cover object-center rounded opacity-75 hover:opacity-100 "
      />
    </div>
  );
};

export default PhotoBlock;
