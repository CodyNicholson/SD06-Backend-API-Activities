const React = require('react')
const Def = require('../default')

function show ({place}) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )

  if (place.comments.length) {
    comments = place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

    return (
      <Def>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img src={place.pic} alt={place.name} />
              <h3>
                Located in {place.city}, {place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h2>Rating</h2>
              <h3>
                Not Rated
              </h3>
              <h2>
                Description
              </h2>
              <h3>
                {place.showEstablished()}
              </h3>
              <h4>
                Serving {place.cuisines}
              </h4>
              <a href={`/places/${place.id}/edit`} className="btn btn-warning">Edit</a>
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>
              </form>
            </div>
            <div className="col-sm-12">
                <h2>
                  Comments
                </h2>
                {comments}
            </div>
            <a href={`/places/${place.id}/comment`}>Add New Comment</a>
          </div>
        </main>
      </Def>
    )
}

module.exports = show
