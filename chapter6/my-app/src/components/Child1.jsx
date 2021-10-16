import React from 'react'
import { Child2 } from './Child2';
import { Child3 } from './Child3';

const contentStyle = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px"
};

export const Child1 = (props) => {
  console.log("Child1 レンダリング")

  return (
    <div style={contentStyle}>
      <p>Child1</p>
      <Child2 />
      <Child3 />
    </div>
  )
}
