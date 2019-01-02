;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.347131 65.214281c-246.678192 0-446.650643 199.972451-446.650643 446.650643s199.972451 446.650643 446.650643 446.650643 446.650643-199.972451 446.650643-446.650643S758.025323 65.214281 511.347131 65.214281zM510.744403 894.491391c-211.92262 0-383.720382-171.797761-383.720382-383.720382s171.797761-383.720382 383.720382-383.720382 383.720382 171.797761 383.720382 383.720382S722.667024 894.491391 510.744403 894.491391z"  ></path>' +
    '' +
    '<path d="M502.173191 708.726523c8.139378 8.138354 8.139378 21.332864 0 29.471219l0 0c-8.138354 8.139378-21.332864 8.139378-29.471219 0L261.234723 526.730493c-8.139378-8.138354-8.139378-21.331841 0-29.471219l0 0c8.138354-8.138354 21.332864-8.138354 29.471219 0L502.173191 708.726523 502.173191 708.726523zM290.705941 526.470573c-8.138354 8.139378-21.332864 8.139378-29.471219 0l0 0c-8.139378-8.138354-8.139378-21.331841 0-29.471219l211.467249-211.467249c8.138354-8.138354 21.332864-8.138354 29.471219 0l0 0c8.139378 8.139378 8.139378 21.332864 0 29.472242L290.705941 526.470573 290.705941 526.470573zM290.705941 526.470573M737.565339 483.569484c15.624862-0.010233 28.296463 12.648065 28.304649 28.271904l0 0c0.010233 15.623839-12.648065 28.296463-28.271904 28.304649l-405.963988 0.233314c-15.623839 0.010233-28.29544-12.647041-28.304649-28.271904l0 0c-0.00921-15.623839 12.649088-28.29544 28.271904-28.304649L737.565339 483.569484 737.565339 483.569484z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512.108 32.48c-85.774 0-166.315 22.488-236.01 61.847C130.374 176.645 32 332.857 32 511.989l0-0.001c0 264.881 214.939 479.555 480.108 479.532 265.17 0 480.107-214.675 480.084-479.556C992.192 247.154 777.229 32.48 512.108 32.48zM512.108 931.596c-232.027 0-420.087-187.868-420.11-419.582 0-231.715 188.083-419.558 420.11-419.558 232.002 0 420.062 187.844 420.062 419.558C932.17 743.753 744.086 931.596 512.108 931.596z"  ></path>' +
    '' +
    '<path d="M584.274 526.607c41.853-25.991 69.982-72.167 70.01-125.307 0-81.504-65.657-147.587-146.634-147.587S361.014 319.795 361.014 401.3c0 53.139 28.132 99.315 69.97 125.307-83.527 31.414-143.293 111.775-143.293 206.795 0 10.174 8.208 18.44 18.323 18.44s18.324-8.252 18.324-18.44c0-101.896 82.064-184.5 183.283-184.5 101.237 0 183.299 82.604 183.299 184.5 0 10.174 8.193 18.44 18.323 18.44 10.115 0 18.324-8.252 18.324-18.44C727.567 638.381 667.788 558.005 584.274 526.607zM397.65 401.315c0-61.142 49.241-110.705 109.973-110.705 60.735 0 109.972 49.578 109.973 110.705 0 61.128-49.24 110.69-109.973 110.69S397.65 462.442 397.65 401.315z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-message" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999 847.883c-28.734 0-56.729-2.604-83.97-7.1L231.233 960.186 231.233 761.407C128.618 689.355 62.772 578.89 62.772 454.826c0-217.08 201.13-393.059 449.229-393.059 248.084 0 449.229 175.98 449.229 393.059C961.229 671.917 760.083 847.883 511.999 847.883zM511.999 117.917c-217.087 0-393.074 150.852-393.074 336.908 0 114.166 66.422 214.897 167.762 275.819l-1.769 130.234 132.172-79.456c30.448 6.498 62.117 10.311 94.91 10.311 217.102 0 393.073-150.825 393.073-336.907C905.073 268.77 729.102 117.917 511.999 117.917zM736.614 510.977c-31.011 0-56.153-25.128-56.153-56.149 0-31.011 25.143-56.152 56.153-56.152 31.012 0 56.153 25.143 56.153 56.152C792.768 485.849 767.624 510.977 736.614 510.977zM511.999 510.977c-31.011 0-56.153-25.128-56.153-56.149 0-31.011 25.144-56.152 56.153-56.152 31.012 0 56.154 25.143 56.154 56.152C568.154 485.849 543.011 510.977 511.999 510.977zM287.386 510.977c-31.011 0-56.153-25.128-56.153-56.149 0-31.011 25.143-56.152 56.153-56.152 31.011 0 56.152 25.143 56.152 56.152C343.538 485.849 318.396 510.977 287.386 510.977z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M98.033 480.211c-10.115 0-20.065-4.783-26.285-13.712-10.102-14.501-6.536-34.446 7.966-44.548l414.033-288.425a32.003 32.003 0 0 1 37.505 0.667l384.137 288.424c14.133 10.612 16.987 30.671 6.376 44.804s-30.67 16.988-44.804 6.375L511.335 199.272l-395.04 275.193a31.845 31.845 0 0 1-18.262 5.746zM831.241 927.64H608.515c-17.673 0-32-14.327-32-32V671.965H448.118V895.64c0 17.673-14.327 32-32 32H188.589c-17.673 0-32-14.327-32-32V513.167c0-17.673 14.327-32 32-32s32 14.327 32 32V863.64h163.529V639.965c0-17.673 14.327-32 32-32h192.397c17.673 0 32 14.327 32 32V863.64h158.727V513.167c0-17.673 14.327-32 32-32s32 14.327 32 32V895.64c-0.001 17.672-14.328 32-32.001 32z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)