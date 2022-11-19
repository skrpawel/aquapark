const BaseComponent = (props: any) => {
  return (
    <div className={props.style + " " + props.color}>
      {props.children}
      <hr />
    </div>
  );
};

export default BaseComponent;
