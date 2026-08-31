import { forwardRef, useId, useRef } from "react";
//parent to child data pass

export const Forwardref = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <BeforeReact19Input label="username" ref={username} />
      <BeforeReact19Input label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
};

//lebel ta holo props 

// I need to create BeforeReact19Input
// eslint-disable-next-line react/display-name
// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

// afterReactv19
const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
};




//contrl form ta react r nijosso compont ta hndl kre.ata react er hate take  
//uncontrolled form ta js r dom teke ctrl kra hoi,react atake ctrl krte pre na
//ip r vitr jokn val provide kri ctrl na krle unctrl ,ata defaultvalue nm a trr r sahaje krte pri
//forward ref parent to child data pass
//puro compont jno rerend na hoi only child r particular jaiai chnG hbe kono state update hbe na