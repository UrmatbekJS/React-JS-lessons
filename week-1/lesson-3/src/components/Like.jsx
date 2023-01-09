import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      {/* На клик меняется предыдущее состояние переворачивается значения */}
      <h2 onClick={() => setLike((prevState) => !prevState)}>
        {/* В зависимости от состояния отображается тот или иной текст(смайлик) */}
        Like: {like ? "❤️" : "♡"}
      </h2>
    </div>
  );
};

export default Like;
