import React from 'react'

export const App = () => {
  const onClickButton = () => {
    alert("クリックされた")
  };

  return (
    <>
      <h1>h1タグ</h1>
      <p>pタグ</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
