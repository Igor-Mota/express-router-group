import userRoutes, { RouterGroup } from "../../group"

function authMiddleware(req, res, next) {
  next()
}
function verifyMidlleware(req, res, next) {
  next()
}
function testeMidleware(req, res, next) {
  next()
}
function validationMiddleware(req, res, next) {
  next()
}
function loginController(req, res) {
  res.send("eae")
}

userRoutes.prefix("/user")
userRoutes.middleware(authMiddleware)
userRoutes.middleware(verifyMidlleware)
userRoutes.middleware(testeMidleware)

userRoutes.set({
  method: "get",
  prefix: "/",
  controller: (req, res) => {
    res.redirect("/login")
  },
})

userRoutes.set({
  method: "get",
  prefix: "/login",
  controller: loginController,
  middleware: [validationMiddleware],
})

console.log(userRoutes.show())
export default userRoutes.get()
