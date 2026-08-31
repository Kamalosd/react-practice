
import React from 'react'

const LikeButton = () => {
  //state var track krbe like button click ho rha hai ya nhi

  let[liked,setLiked]=React.useState(false);//initially like takbe na.jokon e state chnge hobe tokon toGGle hoi jbe

   let toggleLike=()=>{
    setLiked(!liked);
    }

    let likeStyle={color:"red"};
  return (

   //react a bool var by default print kre na strinG akare print krte hoi
    <div>
      <p onClick={toggleLike}>
        {
          Like?(<i className="fa-jelly-fill fa-regular fa-heart" style={likeStyle}></i>): (<i className="fa-sharp fa-regular fa-heart"></i>)
        }
      
      </p>
    </div>
  )
}

export default LikeButton 