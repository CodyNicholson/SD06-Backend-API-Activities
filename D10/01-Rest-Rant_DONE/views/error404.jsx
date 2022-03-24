const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/img.jpg" alt="Cat" />
                  <div>
                    Cat by <a href="placekitten.com">placekitten</a>
                  </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404