/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFloorPlanner = /* GraphQL */ `
  subscription OnCreateFloorPlanner(
    $filter: ModelSubscriptionFloorPlannerFilterInput
  ) {
    onCreateFloorPlanner(filter: $filter) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFloorPlanner = /* GraphQL */ `
  subscription OnUpdateFloorPlanner(
    $filter: ModelSubscriptionFloorPlannerFilterInput
  ) {
    onUpdateFloorPlanner(filter: $filter) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFloorPlanner = /* GraphQL */ `
  subscription OnDeleteFloorPlanner(
    $filter: ModelSubscriptionFloorPlannerFilterInput
  ) {
    onDeleteFloorPlanner(filter: $filter) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserFloorPlanner = /* GraphQL */ `
  subscription OnCreateUserFloorPlanner(
    $filter: ModelSubscriptionUserFloorPlannerFilterInput
  ) {
    onCreateUserFloorPlanner(filter: $filter) {
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
export const onUpdateUserFloorPlanner = /* GraphQL */ `
  subscription OnUpdateUserFloorPlanner(
    $filter: ModelSubscriptionUserFloorPlannerFilterInput
  ) {
    onUpdateUserFloorPlanner(filter: $filter) {
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
export const onDeleteUserFloorPlanner = /* GraphQL */ `
  subscription OnDeleteUserFloorPlanner(
    $filter: ModelSubscriptionUserFloorPlannerFilterInput
  ) {
    onDeleteUserFloorPlanner(filter: $filter) {
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
