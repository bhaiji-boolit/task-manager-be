import router from "./routes.js"

const appRoutes = (app) => {
    return app.use(`/api/v2`, router)
}

export default appRoutes
