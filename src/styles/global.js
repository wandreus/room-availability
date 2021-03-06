import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* vietnamese */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2') format('woff2');
  unicode-range: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
}
/* latin-ext */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2') format('woff2');
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
}
/* latin */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}
/* vietnamese */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2') format('woff2');
  unicode-range:' U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
}
/* latin-ext */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2') format('woff2');
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
}
/* latin */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}
/* vietnamese */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2') format('woff2');
  unicode-range:' U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB';
}
/* latin-ext */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2') format('woff2');
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
}
/* latin */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}
/* vietnamese */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIrsgg4lWmc8kI.woff2') format('woff2');
  unicode-range:' U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;'
}
/* latin-ext */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIqsgg4lWmc8kI.woff2') format('woff2');
  unicode-range: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF';
}
/* latin */
@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/O4ZRFGj5hxF0EhjimlIksgg4lWmc.woff2') format('woff2');
  unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';
}

  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: ${theme.font.family};
      font-display: block;
    }

    html body {
      
    }

    /* http://meyerweb.com/eric/tools/css/reset/
      v2.0-modified | 20110126
      License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
    }

    /* make sure to set some focus styles for accessibility */
    :focus {
      outline: 0;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol,
    ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }

    em {
      font-style: normal;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    input[type='search'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
    }

    textarea {
      overflow: auto;
      vertical-align: top;
      resize: vertical;
    }

    audio,
    canvas,
    video {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      max-width: 100%;
    }

    /**
    * Prevent modern browsers from displaying 'audio' without controls.
    * Remove excess height in iOS 5 devices.
    */

    audio:not([controls]) {
      display: none;
      height: 0;
    }

    /**
    * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
    * Known issue: no IE 6 support.
    */

    [hidden] {
      display: none;
    }

    /**
    * 1. Correct text resizing oddly in IE 6/7 when body 'font-size' is set using
    *    'em' units.
    * 2. Prevent iOS text size adjust after orientation change, without disabling
    *    user zoom.
    */

    html {
      font-size: 100%; /* 1 */
      -webkit-text-size-adjust: 100%; /* 2 */
      -ms-text-size-adjust: 100%; /* 2 */
    }

    a {
      text-decoration: none;
    }

    /**
    * Address 'outline' inconsistency between Chrome and other browsers.
    */

    a:focus {
      outline: thin dotted;
    }

    /**
    * Improve readability when focused and also mouse hovered in all browsers.
    */

    a:active,
    a:hover {
      outline: 0;
    }

    /**
    * 1. Remove border when inside 'a' element in IE 6/7/8/9 and Firefox 3.
    * 2. Improve image quality when scaled in IE 7.
    */

    img {
      border: 0; /* 1 */
      -ms-interpolation-mode: bicubic; /* 2 */
    }

    /**
    * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
    */

    figure {
      margin: 0;
    }

    /**
    * Correct margin displayed oddly in IE 6/7.
    */

    form {
      margin: 0;
    }

    /**
    * Define consistent border, margin, and padding.
    */

    fieldset {
      border: 1px solid #c0c0c0;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }

    /**
    * 1. Correct color not being inherited in IE 6/7/8/9.
    * 2. Correct text not wrapping in Firefox 3.
    * 3. Correct alignment displayed oddly in IE 6/7.
    */

    legend {
      border: 0; /* 1 */
      padding: 0;
      white-space: normal; /* 2 */
      *margin-left: -7px; /* 3 */
    }

    /**
    * 1. Correct font size not being inherited in all browsers.
    * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
    *    and Chrome.
    * 3. Improve appearance and consistency in all browsers.
    */

    button,
    input,
    select,
    textarea {
      font-size: 100%; /* 1 */
      margin: 0; /* 2 */
      vertical-align: baseline; /* 3 */
      *vertical-align: middle; /* 3 */
    }

    /**
    * Address Firefox 3+ setting 'line-height' on 'input' using '!important' in
    * the UA stylesheet.
    */

    button,
    input {
      line-height: normal;
    }

    /**
    * Address inconsistent 'text-transform' inheritance for 'button' and 'select'.
    * All other form control elements do not inherit 'text-transform' values.
    * Correct 'button' style inheritance in Chrome, Safari 5+, and IE 6+.
    * Correct 'select' style inheritance in Firefox 4+ and Opera.
    */

    button,
    select {
      text-transform: none;
    }

    /**
    * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
    *    and 'video' controls.
    * 2. Correct inability to style clickable 'input' types in iOS.
    * 3. Improve usability and consistency of cursor style between image-type
    *    'input' and others.
    * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
    *    Known issue: inner spacing remains in IE 6.
    */

    button,
    html input[type="button"], /* 1 */
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button; /* 2 */
      cursor: pointer; /* 3 */
      *overflow: visible; /* 4 */
    }

    /**
    * Re-set default cursor for disabled elements.
    */

    button[disabled],
    html input[disabled] {
      cursor: default;
    }

    /**
    * 1. Address box sizing set to content-box in IE 8/9.
    * 2. Remove excess padding in IE 8/9.
    * 3. Remove excess padding in IE 7.
    *    Known issue: excess padding remains in IE 6.
    */

    input[type='checkbox'],
    input[type='radio'] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
      *height: 13px; /* 3 */
      *width: 13px; /* 3 */
    }

    /**
    * 1. Address 'appearance' set to 'searchfield' in Safari 5 and Chrome.
    * 2. Address 'box-sizing' set to 'border-box' in Safari 5 and Chrome
    *    (include '-moz' to future-proof).
    */

    input[type='search'] {
      -webkit-appearance: textfield; /* 1 */
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box; /* 2 */
      box-sizing: content-box;
    }

    /**
    * Remove inner padding and search cancel button in Safari 5 and Chrome
    * on OS X.
    */

    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    /**
    * Remove inner padding and border in Firefox 3+.
    */

    button::-moz-focus-inner,
    input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    /**
    * 1. Remove default vertical scrollbar in IE 6/7/8/9.
    * 2. Improve readability and alignment in all browsers.
    */

    textarea {
      overflow: auto; /* 1 */
      vertical-align: top; /* 2 */
    }

    /**
    * Remove most spacing between table cells.
    */

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    html,
    button,
    input,
    select,
    textarea {
      color: #222;
    }

    ::-moz-selection {
      background: #b3d4fc;
      text-shadow: none;
    }

    ::selection {
      background: #b3d4fc;
      text-shadow: none;
    }

    img {
      vertical-align: middle;
    }

    fieldset {
      border: 0;
      margin: 0;
      padding: 0;
    }

    textarea {
      resize: vertical;
    }

    .chromeframe {
      margin: 0.2em 0;
      background: #ccc;
      color: #000;
      padding: 0.2em 0;
    }

    .slick {
      &-dots {
        display: flex !important;
        justify-content: center;
        align-items: center;

        button {
          opacity: 0;
          appearance: none;
          cursor: pointer;
        }

        li {
          width: 10px;
          height: 10px;
          background: ${theme.colors.$c_blue};
          border: 1px solid #fff;
          border-radius: 10px;
          margin: 0 3px;
          transition: ${theme.colors.transition};
          cursor: pointer;

          &.slick-active {
            background: #fff;
            border: 1px solid ${theme.colors.$c_blue};
          }
        }
      }
    }
  `}
  

.slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus {
    outline: none;
}
.slick-list.dragging {
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  &:empty {
    display: flex;
    justify-content: center;
    padding: 40px 0;

    &:before {
      content: 'Nenhum destaque cadastrado';
    }

  }
  &:before,
  &:after {
      display: table;
      content: '';
  }
  &:after {
      clear: both;
  }
}
.slick-loading .slick-track {
    visibility: hidden;
}

.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}

[dir='rtl'] .slick-slide {
    float: right;
}

.slick-slide img {
    display: block;
}

.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}
`

export default GlobalStyles
