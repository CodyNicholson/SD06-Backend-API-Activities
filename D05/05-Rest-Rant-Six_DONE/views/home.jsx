const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST Rant</h1>
                <a href='/places'>Come see our places</a>
                <div>
                  <img src="http://placekitten.com/g/100/200" alt="Cat" />
                  <div>
                    Cat by <a href="placekitten.com">placekitten</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home