// ==UserScript==
// @name         修改网页默认字体
// @namespace    https://steamcommunity.com/id/ihan_u_
// @version      1.0
// @description  HarmonyOS Sans SC（鸿蒙黑体）
// @author       ihan_u_
// @match        *://*/*
// @exclude      https://github.com/*/blob/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAsVJREFUWEfFl0uoT1EUxn+3MJCBQqIMriKUVxhwyy1vJQaYUTIgE+RxDe/sFi55TMSEGMijMPCmlMeAEvKIgRlJSsKAif1p7dr/3T5nn/Pv3O6anDp777W+vZ7f7mCQpWOQ7VMGYCgwBRgRgXxSAno4MDNa/wm8A/6mzqUATAYOmqJhiUPngJ4CEFuB3sTaH+AFsBd4H67HAGT8JKCv5A3wPVJ4HHhQAGAxsC1aGwlMs38yviUEEQO4BswFDgF3gJcN5cgMYCmwG3gGrPZ6QwCK+QdAbt8A3G/IuFezCFD4FI5JPidCAEqeG8BHd/uuisZ1s9E1wD4COoGVlhMtVTAfuAw8BtZVBHAdmAV0m/dyxy4BC4C1wP9qCj1QF4BiesYsHgCO5KwDjQJQNegmkteWZDkMjQGYADwMPDgE2OTcezuDoBTAKOCwlZ7KsEx2APuA07ZJxi+4nrEzc05lqMTdBXyLcyDnvnD9HjDVeWGJ/bzrutwvYI5T/qOOonaG0TK7eVgt3rVqw6cGGoBa9Spgu2W17KlsjwFPgTUDCWCMNRDFb3pk6BWgPFJ5qioqSd0Q+OQrU64QpCZi8kxdACq9iZmrfU1wgsIjIYCxgG4o96bKcKEjKOeBt4DGbkp8dWwGbiY2qAwVpqNubH+JyzDXik/YGBXIiwUA1ptyGReIWNruhKJlnsmMz4Tgk62LzsU9oW0A3jtnrQOWYdgPbAwnXrC5bQDSIRBlhDQEVbS3FIDq+pbxQN9iK9VyjU1q2eKHy52H1Dda+EBIyVY0yAc9Pg0hJWchJdPGq8A8K8PnNahWzgnig7ONlLa06xwtFz/8HGkXsbxSYFF1rviHMs54oP5labk26U3Qb3M79TDRzNfsT0mfEZN4TW4Xxd+Te5iEB5UTShg9t0KRIs3+lKibxq36tyV25adZLp6NrtcdRo0al7J/7JiYIdg0gNwAAAAASUVORK5CYII=
// @grant        GM_addStyle
// @license      MIT
// @run-at       document-start
// @supportURL   https://steamcommunity.com/id/ihan_u_
// @homepageURL  https://steamcommunity.com/id/ihan_u_
// ==/UserScript==

GM_addStyle(`div,h1,h2,h3,h4,h5,h6,p,button,input,textarea,.markdown-body,.menuitem {font-family: "HarmonyOS Sans SC", "Microsoft YaHei UI" !important;}`)
