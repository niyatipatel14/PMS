const route = require("express").Router();
const { getUserList, signUp, updateUser, loginUser } = require("../../controllers/users");

route.get("/getUserList", async (req, res) => {
  const responseObj = await getUserList(req);
  res.send(responseObj);
});
route.post("/signUp", async (req, res) => {
  const responseObj = await signUp(req);
  res.send(responseObj);
});
route.post("/updateUser", async (req, res) => {
  const responseObj = await updateUser(req);
  res.send(responseObj);
});

route.post("/login", async (req, res) => {
  const responseObj = await loginUser(req);
  res.send(responseObj);
})

module.exports = route;





