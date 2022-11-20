const BaseComponent = (props: any) => {
  return (
    <div id={props.id} className={props.style + " " + props.color}>
      {props.children}
      <hr />
    </div>
  );
};

export default BaseComponent;
