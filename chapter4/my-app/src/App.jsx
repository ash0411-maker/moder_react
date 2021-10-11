import React from 'react'
import { useState } from 'react'
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((num) => num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      <ColoredMessage color="blue">お元気ですか？ => props</ColoredMessage>
      <ColoredMessage color="pink">元気です。 => props</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{ num }</p>
    </>
  );
};
