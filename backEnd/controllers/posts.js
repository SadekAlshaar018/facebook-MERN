const Post = require('../models/posts.js');
const {check, validationResult} = require('express-validator/check');


//cheack a post vield if it is empty of not
var validate = () => {
  return [
      check('text', 'Pleas enter  text').not().isEmpty(),
  ];
};

//cheak if a user logedin of not
var add = (req, res) => {
    // if( !req.session.user )
    //     res.redirect('/users/login');
    //
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     req.session.err_msg = errors.mapped();
    //     if( req.params.id )
    //         return res.redirect('/books/edit/' + req.params.id);
    //     else
    //         return res.redirect('/books/add');
    // }

    let record = {
        text:  req.body.text,
        user:  req.body.user,
        parent:  req.body.parent ? parseInt(req.body.parent) : 0,
        date:  req.body.date ? new Date(req.body.date) : new Date()
    };


    if( req.params.id ){
        Post.findByIdAndUpdate( req.params.id, record )
             .then( result => {
                 res.json(result);
             })
             .catch( err => console.log(err) );
    } else {
        Post.create( record )
             .then( result => {
                 res.json(result);
             })
             .catch( err => res.status(422).json({ error: err.message }) );
    }
};

      var all = (req, res) => {
        Post.find({}).sort('-vote')
            .then ( data => {
              res.json(data);
            })
            .catch(err => console.log(err));
      };

      // defiende a vote function


      module.exports = {
    add:  add,
    validate: validate,
    all:  all

};
