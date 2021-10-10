import React from 'react'
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  const onClickButton = () => {
    alert("クリックされた")
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      <ColoredMessage color="blue">お元気ですか？ => props</ColoredMessage>
      <ColoredMessage color="pink">元気です。 => props</ColoredMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
