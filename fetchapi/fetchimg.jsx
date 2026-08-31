import React, { useState, useEffect } from 'react'

const ShowImg = () => {

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <div>
      {image && <img src={image.message} />}
    </div>
  )
}

export default ShowImg;
//api r sahje imG asbe