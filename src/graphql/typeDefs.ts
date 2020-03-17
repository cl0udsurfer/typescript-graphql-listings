import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Listing {
    id: ID
    title: String!
    image: String!
    address: String!
    price: Int!
    numofGuests: Int!
    numofBeds: Int!
    numofBaths: Int!
    rating: Int!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
