const axios = require('axios');
const { response } = require('express');


exports.add_patients =(req,res)=>{
    res.render('index');
   
}

exports.view_patients =(req,res)=>{
        //get request to a api/users
     axios.get("http://localhost:3000/display/api/users")
    .then(function(response){
        res.render('display',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}
//login page
exports.login_page = (req, res) => {
    res.render('login', { title : "login" });
};
//update
exports.update_page = (req,res)=>{
    axios.get("http://localhost:3000/display/api/users",{params :{id:req.query.id}})
    .then(function(userdata){
        res.render("update",{user: userdata.data})
    })
    // res.render('update');
    .catch(err=>{
        res.send(err);
    })
}

exports.logout_page = (req,res)=>{
    res.render('login');
}