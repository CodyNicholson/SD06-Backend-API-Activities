const React = require('react')
const Def = require('../default.jsx')

function comment_form ({place}) {
    // let message = ''               
    // if (data.message) {
    //   message = (
    //     <h4 className="alert-danger">
    //       {data.message}
    //     </h4>
    //   )
    // }
    return (
        <Def>
          <main>
            <h1>Add a New Comment</h1>
            {/* {message} */}
            <form method="POST" action={`/places/${place.id}/comment`}>
                <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" id="content" name="content" />
                </div>
                <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                    <label htmlFor="rating">Rating</label>
                    <input className="form-control" type="number" id="rating" name="rating" value={5} max="5" min="0" required />
                </div>
                <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                  <label htmlFor="rant">Rant</label>
                  <input type="checkbox" name="rant" id="rant" defaultChecked />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = comment_form