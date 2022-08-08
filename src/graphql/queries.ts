/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFloorPlanner = /* GraphQL */ `
  query GetFloorPlanner($id: ID!) {
    getFloorPlanner(id: $id) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const listFloorPlanners = /* GraphQL */ `
  query ListFloorPlanners(
    $filter: ModelFloorPlannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFloorPlanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        photo
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserFloorPlanner = /* GraphQL */ `
  query GetUserFloorPlanner($id: ID!) {
    getUserFloorPlanner(id: $id) {
      id
      name
      email
      floorPlanner
      otherInfo
      createdAt
      updatedAt
    }
  }
`;
export const listUserFloorPlanners = /* GraphQL */ `
  query ListUserFloorPlanners(
    $filter: ModelUserFloorPlannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFloorPlanners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        floorPlanner
        otherInfo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
