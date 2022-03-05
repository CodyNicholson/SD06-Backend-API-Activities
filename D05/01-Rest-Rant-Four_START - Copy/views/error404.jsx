const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="http://placekitten.com/g/100/200" alt="Cat" />
                  <div>
                    Cat by <a href="placekitten.com">placekitten</a>
                  </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404