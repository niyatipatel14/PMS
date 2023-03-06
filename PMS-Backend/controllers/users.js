const { models } = require("../models");
const bcrypt = require('bcrypt');

// getting the userlist
const getUserList = async function () {
  const responseObj = { status: "", message: "", result: [] };
  return await models.Users.findAll()
    .then((data) => {
      responseObj.status = "Success";
      responseObj.message = "Userlist Got It Sucessfully";
      responseObj.result = data;
      return responseObj;
    })
    .catch((err) => {
      responseObj.status = "Failure";
      responseObj.message = err.message;
    })
}
// adding the user
const signUp = async function (req) {
  const responseObj = { status: "", message: "", result: [] };
  const userObj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    isDeleted: req.body.isDeleted,
    // password: bcrypt.hashSync(req.body.password,8),
    password:req.body.password,
    authtoken: req.body.authtoken,
    screenAccess: req.body.screenAcc

  }
  return await models.Users.create(userObj)
    .then((data) => {
      responseObj.status = "Success";
      responseObj.message = "User Added Sucessfully";
      responseObj.result = data;
      return responseObj;
    })
    .catch((err) => {
      responseObj.status = "Failure";
      responseObj.message = err.message;
      responseObj.result = data;
    })
}
// upadteing the user
const updateUser = async function (req) {
  const responseObj = { status: "", message: "", result: [] };
  const userObj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    isDeleted: req.body.isDeleted,
    password: req.body.password,
    authtoken: req.body.authtoken,
    screenAccess: req.body.screenAccess
  }
  return await models.Users.update(userObj, {
    where: {
      id: req.body.id
    }
  })
    .then((data) => {
      responseObj.status = "Success";
      responseObj.message = "User Update Sucessfully";
      responseObj.result = data;
      return responseObj;
    })
    .catch((err) => {
      responseObj.status = "Failure";
      responseObj.message = err.message;
      responseObj.result = data;
    })
}
  
//login 
const  loginUser= async function (req) {
  console.log(req,"rq")
  const responseObj = { status: "", message: "", result: [] };
  const user =  await models.Users.findOne({
    where: {
      email: req.body.email,
    }
  });
  const userPassword = req.body.password;
  if(user){
    if(userPassword !== user.password){
      responseObj.status = "failed";
      responseObj.message = "Invalid Password";
      return responseObj
    } 
    responseObj.message = "User Logged In Successfully";
    responseObj.status = "Success";
    return responseObj
  }else{
    responseObj.status = "failed";
    responseObj.message = "User Not Found";
    return responseObj
  }
}

module.exports = { getUserList, signUp, updateUser,loginUser };
