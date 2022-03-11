import express from 'express'
import {ApolloServer} from "apollo-server-express";
import cors from 'cors'
import messagesRoute from "./routes/messages.js";
import usersRoute from "./routes/users.js";

const app = express()
// app.use(express.urlencoded({ extended: true })) //
// app.use(express.json()) //json 을 사용할 것

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

//graphql 은 graphql 패스 하나로 내부에서 자체적으로 판단함
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models: {
            messages: '',
            users: ''
        }
    }
})

// server.applyMiddleware({app, path: '/graphql'})

// RESTAPI 를 위함
const routes = [...messagesRoute, ...usersRoute]
routes.forEach(({method, route, handler}) => {
    app[method](route, handler)
})

app.listen(8000, () => {
    console.log("server listening on 8000...")
})

