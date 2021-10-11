import React from 'react'
import classes from "./CssModules.module.scss"

// node-sassを導入するのに実行したコマンド
// https://qiita.com/Tateishi0819/items/c105693da353a5a0c776


export const CssModules = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules</p>
      <button className={classes.button}>ボタン</button>
    </div>
  )
}
