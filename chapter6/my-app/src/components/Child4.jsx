import React from 'react'

const contentStyle = {
  height: "50px",
  backgroundColor: "wheat",
  padding: "8px"
};

export const Child4 = (props) => {
  console.log("Child4 レンダリング")

  return (
    <div style={contentStyle}>
      <p>Child4</p>
    </div>
  )
}
