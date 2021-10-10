import React from 'react'

export const App = () => {
  const onClickButton = () => {
    alert("クリックされた")
  };

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  }

  return (
    <>
      <h1 style={{ color: "red" }}>h1タグ</h1>
      <p style={contentStyle}>pタグ</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
