import React from 'react'
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  const onClickButton = () => {
    alert("クリックされた")
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      <ColoredMessage color="blue" message="お元気ですか？ => props" />
      <ColoredMessage color="pink" message="元気です。 => props" />

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
