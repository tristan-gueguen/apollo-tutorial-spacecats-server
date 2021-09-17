const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track]!
    author(id: ID!): Author
    track(id: ID!): Track
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    description: String
    numberOfViews: Int
    modulesCount: Int
    modules: [Module]
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }
`;
module.exports = typeDefs;
