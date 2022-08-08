/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFloorPlanner = /* GraphQL */ `
  mutation CreateFloorPlanner(
    $input: CreateFloorPlannerInput!
    $condition: ModelFloorPlannerConditionInput
  ) {
    createFloorPlanner(input: $input, condition: $condition) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateFloorPlanner = /* GraphQL */ `
  mutation UpdateFloorPlanner(
    $input: UpdateFloorPlannerInput!
    $condition: ModelFloorPlannerConditionInput
  ) {
    updateFloorPlanner(input: $input, condition: $condition) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteFloorPlanner = /* GraphQL */ `
  mutation DeleteFloorPlanner(
    $input: DeleteFloorPlannerInput!
    $condition: ModelFloorPlannerConditionInput
  ) {
    deleteFloorPlanner(input: $input, condition: $condition) {
      id
      name
      photo
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUserFloorPlanner = /* GraphQL */ `
  mutation CreateUserFloorPlanner(
    $input: CreateUserFloorPlannerInput!
    $condition: ModelUserFloorPlannerConditionInput
  ) {
    createUserFloorPlanner(input: $input, condition: $condition) {
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
export const updateUserFloorPlanner = /* GraphQL */ `
  mutation UpdateUserFloorPlanner(
    $input: UpdateUserFloorPlannerInput!
    $condition: ModelUserFloorPlannerConditionInput
  ) {
    updateUserFloorPlanner(input: $input, condition: $condition) {
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
export const deleteUserFloorPlanner = /* GraphQL */ `
  mutation DeleteUserFloorPlanner(
    $input: DeleteUserFloorPlannerInput!
    $condition: ModelUserFloorPlannerConditionInput
  ) {
    deleteUserFloorPlanner(input: $input, condition: $condition) {
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
