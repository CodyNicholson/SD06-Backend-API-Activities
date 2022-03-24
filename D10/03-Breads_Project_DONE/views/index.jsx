const React = require('react')
const Default = require('./layouts/Default')

function Index({breads, bakers, title})  {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
          {
              bakers.map((baker)=> {
                  return (
                      <li key={baker._id}>
                          <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                      </li>
                  )
              })
          }
      </ul>
      <h3>Breads</h3>
      <ul>
        {
          breads.map((bread) => {
            console.log(bread)
            return (<li key={bread._id}>
              <a href={`/breads/${bread._id}`}>
                {bread.name}
              </a>
            </li>)
          })
        }
      </ul>
      <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
      </div>
    </Default>
  )
}

module.exports = Index
