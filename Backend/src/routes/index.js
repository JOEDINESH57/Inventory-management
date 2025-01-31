const { route } = require(".");
const { path } = require("../app");

const router  = require("express").Router();route


const routes = [
    {
        path :'/auth',
        route:require('./Auth.route')
    }
]

routes.forEach((cur)=>{
    router.use(cur.path,cur.route);
})

module.exports = router