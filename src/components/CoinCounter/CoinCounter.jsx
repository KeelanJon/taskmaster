import React from "react"
import { useState } from "react"
import "./CoinCounter.css"

export default function CoinCounter(props) {
  let coins = props.coins

  function addCoins() {
    props.setCoins(coins + 1)
  }

  function spendCoins() {
    if (coins >= 2) {
      props.setCoins(coins - 2)
    } else {
      alert("You don't have enough coins!")
    }
  }

  return (
    <div className="coin-counter">
      <h2 className="label">🪙</h2>
      <h2 className="counter"> {coins} </h2>
      <button onClick={spendCoins}>Buy Coffee</button>
    </div>
  )
}
