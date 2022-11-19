const PhotoBlock = (props: any) => {
  return (
    <div className="h-full ">
      <img
        src={props.imgURL}
        alt="Photo of Top G"
        className="h-full w-96 object-cover rounded opacity-75 hover:opacity-100 object-center"
      />
    </div>
  );
};

export default PhotoBlock;
