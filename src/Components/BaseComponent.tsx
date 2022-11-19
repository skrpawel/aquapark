const BaseComponent = (props: any) => {
  return (
    <div className={"h-full	" + props.style + " " + props.color}>
      {props.children}
    </div>
  );
};

export default BaseComponent;
