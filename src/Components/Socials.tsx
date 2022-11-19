const Socials = (props: any) => {
  return (
    <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center hover:opacity-80 cursor-pointer">
      {props.children}
    </div>
  );
};

export default Socials;
