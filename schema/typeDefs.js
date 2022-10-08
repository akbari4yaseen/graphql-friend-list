const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: NationalityEnum!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    publishedYear: Int!
    genre: String!
  }

  enum NationalityEnum {
    AFGHANISTAN
    GERMANY
    CANADA
    IRAN
    INDIA
    PAKISTAN
    US
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie
  }
`;

module.exports = { typeDefs };
