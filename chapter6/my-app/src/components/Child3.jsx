import { React, memo } from 'react'

const contentStyle = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child3 = memo(() => {
  console.log("Child3 レンダリング")

  return (
    <div style={contentStyle}>
      <p>Child3</p>
    </div>
  )
});
