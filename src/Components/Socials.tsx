const Socials = (props: any) => {
  return (
    <a
      className="w-12 h-12 border-2 rounded-full flex justify-center items-center hover:opacity-80 cursor-pointer"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

export default Socials;
