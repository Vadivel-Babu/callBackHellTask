const el = document.querySelector('h2');

setTimeout(() => {
  el.innerText = 10
  setTimeout(() => {
    el.innerText = 9
    setTimeout(() => {
      el.innerText = 8
      setTimeout(() => {
        el.innerText = 7
        setTimeout(() => {
          el.innerText = 6
          setTimeout(() => {
            el.innerText = 5
            setTimeout(() => {
              el.innerText = 4
              setTimeout(() => {
                el.innerText = 3
                setTimeout(() => {
                  el.innerText = 2
                  setTimeout(() => {
                    el.innerText = 1
                    setTimeout(() => {
                      el.innerText = 'Happy Independence Day'
                    }, 1000)
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000);






