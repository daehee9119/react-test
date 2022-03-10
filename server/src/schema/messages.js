import {gql} from "apollo-server-express";

const messageSchema = gql`
    type Message {
        id: ID!
        text: String!
        user: User!
        timestamp: Float! #13자리 숫자
    }
    
    extend type Query { # 이러한 쿼리를 날릴건데
        messages(cursor: ID): [Message!]!  #getMessagess
        messages(id: ID!): Message! #getMessage
    }
    
    extend type Mutation {
        createMessage(text: String!, userId: ID!): Message!
        updateMessage(id: ID!, text: String!, userId):
        deleteMessage():
    }
`

export default messageSchema
