import React from 'react'

const contentStyle = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child2 = () => {
  console.log("Child2 レンダリング")

  return (
    <div style={contentStyle}>
      <p>Child2</p>
    </div>
  )
}
