const Userdb = require('../model/model');

//create the datas and send to the database
exports.create = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({ message: "Content can not be empty" });
            return;
        }

        const user = new Userdb({
                Room : req.body.Room,
                Id : req.body.Id,
                Name : req.body.Name,
                Age:req.body.Age,
                Gender: req.body.Gender,
                BloodGroup : req.body.BloodGroup,
                PhoneNumber : req.body.PhoneNumber,
                BloodPressure : req.body.BloodPressure,
                DateofAdmission : req.body.DateofAdmission,
                AadharNumber: req.body.AadharNumber,
                Address: req.body.Address,
                City : req.body.City,
                State : req.body.State,
                PinCode: req.body.PinCode,
                AttenderName : req.body.AttenderName,
                AttenderPhoneNo : req.body.AttenderPhoneNo,
                AttenderAadharNo : req.body.AttenderAadharNo,
                AttenderAddress : req.body.AttenderAddress,
                AttenderCity : req.body.AttenderCity,
                AttenderState : req.body.AttenderState,
                AttenderPinCode : req.body.AttenderPinCode        });

        const data = await user.save();
        res.redirect('/index');

    } catch (err) {
        console.log("data");

        res.status(500).send({
            message: err.message || "Some error occurred"
        });
    }
};


//reterive one and all
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id "+id});
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error occured in get single user"})
        })
    }
    else{
        Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||'Error occure to get data'})
});
    }
    
}



//update
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:'Data to update can not be empty'})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`can't get user with ${id}. User Not found`})
        }else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Error occure in update"});
    })
}



//delete
exports.delete = (req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data)
        {
            res.status(404).send({message:`cannot delete the user with ${id}`})
        }else{
            res.send({
                message:'user was delete successfully'
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message:'couldnot delete the user with id '+id
    });
    });
}

const credential ={
    email : "admin@gmail.com",
    password : "admin"
}
exports.login = (req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password)
    {
        req.session.user = req.body.email;
        res.redirect('index');
    }else if(req.body.email != credential.email){
        res.end("Invalid Email");
    }
    else if(req.body.password != credential.password){
        res.end("Invalid Password");
    }
}

exports.logout = (req,res)=>{
   req.session.destroy(function(err){
    if(err){
        console.log(err);
        res.send("ERROR");
    }
    else{
        res.render('login',{title:"Express", logout:"logout sucessfully"})
    }
   })
}