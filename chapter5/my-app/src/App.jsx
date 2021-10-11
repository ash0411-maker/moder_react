import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ColoredMessage } from './components/ColoredMessage';
import { CssModules } from './components/CssModules';

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum((num) => num + 1);
  };

  useEffect(() => {
    alert();
  }, [num]);

  return (
    <>
      <CssModules></CssModules>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      <ColoredMessage color="blue">お元気ですか？ => props</ColoredMessage>
      <ColoredMessage color="pink">元気です。 => props</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{ num }</p>
    </>
  );
};
