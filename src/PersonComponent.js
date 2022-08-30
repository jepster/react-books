import {css} from "@emotion/css";

const PersonComponent = (props) => {

  return (
    <>
      <div className={css`
        float: right;
        `}>
        {props.firstname} {props.lastname}
      </div>
    </>
  );

}

export default PersonComponent;
