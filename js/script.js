// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {

  // input

  let a = parseInt(document.getElementById('A').value)
  let b = parseInt(document.getElementById('B').value)
  let i = 0
  let product = 0

  // process

  while (b > i) {
    product += a
    i += 1
  }

  // output

  document.getElementById("user-info").innerHTML = product
}
