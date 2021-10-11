import React from 'react'
import classes from "./CssModules.module.scss"

export const CssModules = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules</p>
      <button className={classes.button}>ボタン</button>
    </div>
  )
}
