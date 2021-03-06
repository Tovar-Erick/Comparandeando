/*jslint node: true */
'use strict';

var mongoose = require('mongoose'),
    db_link  = 'mongodb://localhost/Comparandeando',
    db       = mongoose.createConnection(db_link);

var product_schema = require('models/product')
   ,Product = db.model('Product', product_schema)
   ,ObjectId=mongoose.Types.ObjectId;


//Demo function
exports.awesomeThings = function(req, res) {
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ]);
};

//Get all products
exports.getAllProducts = function(req, res, next){
  Product.find(gotProducts);
  function gotProducts (err, productos) {
    if (err) {
      console.log('Error in getAllProducts'+err)
      return next()
    }
    return res.json(productos);
  }
}

//Get all places 
exports.getAllPlaces = function(req, res, next){
  Product.find(gotProducts);
  function gotProducts (err, places) {
    if (err) {
      console.log('Error in getAllPlaces'+err)
      return next()
    }
    return res.json(productos);
  }
}


//Get a product
exports.getProduct = function(req, res, next){
  var id=req.params.id;
  Product.findById(id, gotProducts);
  function gotProducts (err, productos) {
    if (err) {
      console.log('Error in getProduct: '+err)
      return next()
    }

    return res.json( productos )
  }    
};

//Get a place                                                                                                                      
exports.getPlace = function(req, res, next){
  var id=req.params.id;
  Product.findById(id, gotProducts);
  function gotProducts (err, productos) {
    if (err) {
      console.log('Error in getProduct: '+err)
      return next()
    }

    return res.json( productos )
  }
};


//Update a product
exports.setProduct = function(req, res, next){
   var id = req.params.id
   Product.findById(id, gotProducts);
   function gotProducts (err, producto) {
    if (err) {
      console.log('Error in setProduct: '+err)
      return next()
    }

    if(producto){
       producto.name=req.body.name;
       producto.description = req.body.description;
       producto.user = req.body.user;
       producto.location = req.body.location;
       producto.price = req.body.price;
       producto.stock = req.body.stock
       producto.save(onSave);
    }
    else{
       console.log('Producto que se desea modificar no fue encontrado');
    }
  }

 function onSave(error){
   if(error){
     console.log('Error salvando el producto a editar');
     return next(err);
   }else{
     return res.redirect('#/products')
   }
 }
};


//Update a product                                                                                                         
exports.setPlace = function(req, res, next){
   var id = req.params.id
   Product.findById(id, gotProducts);
   function gotProducts (err, producto) {
    if (err) {
      console.log('Error in setProduct: '+err)
      return next()
    }

    if(producto){
       producto.name=req.body.name;
       producto.description = req.body.description;
       producto.user = req.body.user;
       producto.location = req.body.location;
       producto.price = req.body.price;
       producto.stock = req.body.stock
       producto.save(onSave);
    }
    else{
       console.log('Producto que se desea modificar no fue encontrado');
    }
  }

 function onSave(error){
   if(error){
     console.log('Error salvando el producto a editar');
     return next(err);
   }else{
     return res.redirect('#/products')
   }
 }
};



//Delete a product
exports.removeProduct = function(req, res){
   var id = req.params.id
   Product.findById(id, gotProducts);
   function gotProducts (err, producto) {
    if (err) {
      console.log('Error in removeProduct: '+err)
      return next()
    }

    if(producto){
       producto.remove(onRemove);
    }
    else{
       console.log('Producto que se desea borrar no fue encontrado');
    }
  }
 function onRemove(error){
   if(error){
     console.log('Error borrando el producto');
     return next(err);
   }else{
     return res.redirect('#/products')
   }
 }


};


//Delete a product                                                                                                                         
exports.removePlace = function(req, res){
   var id = req.params.id
   Product.findById(id, gotProducts);
   function gotProducts (err, producto) {
    if (err) {
      console.log('Error in removeProduct: '+err)
      return next()
    }

    if(producto){
       producto.remove(onRemove);
    }
    else{
       console.log('Producto que se desea borrar no fue encontrado');
    }
  }
 function onRemove(error){
   if(error){
     console.log('Error borrando el producto');
     return next(err);
   }else{
     return res.redirect('#/products')
   }
 }


};



//Create a product
exports.newProduct = function(req, res, next){
//  var nombre = req.body.name || 'mamas';
    var prod = new Product(req.body);
    //console.log('Dato '+prod);
    prod.save(onSaved);
//    res.redirect('#/products');
    function onSaved(err){
      if(err){
        console.log('Error grabando nuevo producto: '+err);
        return next(err);
      }
      else{
        return res.redirect('#/products');
      }
    }
   
};

//Create a product                                                                                                                          
exports.newPlace = function(req, res, next){
//  var nombre = req.body.name || 'mamas';                                                                                                    
    var prod = new Product(req.body);
    //console.log('Dato '+prod);                                                                                                               
    prod.save(onSaved);
//    res.redirect('#/products');                                                                                                              
    function onSaved(err){
      if(err){
        console.log('Error grabando nuevo producto: '+err);
        return next(err);
      }
      else{
        return res.redirect('#/products');
      }
    }

};
