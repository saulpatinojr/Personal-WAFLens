# DataConnect Schema

This document contains the schema definition for the DataConnect service.

```graphql
type WAFPillar {
  id: ID!
  name: String!
  description: String
  controls: [WAFControl]
}

type WAFControl {
  id: ID!
  name: String!
  description: String
  pillar: WAFPillar
}

# Represents a subscription to a specific WAF pillar
type AppSubscription {
  id: ID!
  pillar: WAFPillar
  active: Boolean
  createdAt: String
}

# Represents a resource that is being evaluated

input Pagination {
  limit: Int
  offset: Int
}

type Resource {
  id: ID!
  name: String!
  type: String!
  region: String!
  recommendations: [Recommendation]
}

type Recommendation {
  id: ID!
  description: String
  resource: Resource
  control: WAFControl
  status: String
}

# Defines a query to get all resources with pagination



# Defines a mutation to update the status of a recommendation
type Query {
  listResources(pagination: Pagination): [Resource]
}


type Mutation {
  updateRecommendationStatus(recommendationId: ID!, status: String!): Recommendation
}
```
