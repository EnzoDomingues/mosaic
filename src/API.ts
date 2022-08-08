/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFloorPlannerInput = {
  id?: string | null,
  name: string,
  photo?: string | null,
  description?: string | null,
};

export type ModelFloorPlannerConditionInput = {
  name?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFloorPlannerConditionInput | null > | null,
  or?: Array< ModelFloorPlannerConditionInput | null > | null,
  not?: ModelFloorPlannerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type FloorPlanner = {
  __typename: "FloorPlanner",
  id: string,
  name: string,
  photo?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFloorPlannerInput = {
  id: string,
  name?: string | null,
  photo?: string | null,
  description?: string | null,
};

export type DeleteFloorPlannerInput = {
  id: string,
};

export type CreateUserFloorPlannerInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  floorPlanner?: string | null,
  otherInfo?: string | null,
};

export type ModelUserFloorPlannerConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  floorPlanner?: ModelStringInput | null,
  otherInfo?: ModelStringInput | null,
  and?: Array< ModelUserFloorPlannerConditionInput | null > | null,
  or?: Array< ModelUserFloorPlannerConditionInput | null > | null,
  not?: ModelUserFloorPlannerConditionInput | null,
};

export type UserFloorPlanner = {
  __typename: "UserFloorPlanner",
  id: string,
  name: string,
  email?: string | null,
  floorPlanner?: string | null,
  otherInfo?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserFloorPlannerInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  floorPlanner?: string | null,
  otherInfo?: string | null,
};

export type DeleteUserFloorPlannerInput = {
  id: string,
};

export type ModelFloorPlannerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFloorPlannerFilterInput | null > | null,
  or?: Array< ModelFloorPlannerFilterInput | null > | null,
  not?: ModelFloorPlannerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloorPlannerConnection = {
  __typename: "ModelFloorPlannerConnection",
  items:  Array<FloorPlanner | null >,
  nextToken?: string | null,
};

export type ModelUserFloorPlannerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  floorPlanner?: ModelStringInput | null,
  otherInfo?: ModelStringInput | null,
  and?: Array< ModelUserFloorPlannerFilterInput | null > | null,
  or?: Array< ModelUserFloorPlannerFilterInput | null > | null,
  not?: ModelUserFloorPlannerFilterInput | null,
};

export type ModelUserFloorPlannerConnection = {
  __typename: "ModelUserFloorPlannerConnection",
  items:  Array<UserFloorPlanner | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFloorPlannerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  photo?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFloorPlannerFilterInput | null > | null,
  or?: Array< ModelSubscriptionFloorPlannerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFloorPlannerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  floorPlanner?: ModelSubscriptionStringInput | null,
  otherInfo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFloorPlannerFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFloorPlannerFilterInput | null > | null,
};

export type CreateFloorPlannerMutationVariables = {
  input: CreateFloorPlannerInput,
  condition?: ModelFloorPlannerConditionInput | null,
};

export type CreateFloorPlannerMutation = {
  createFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFloorPlannerMutationVariables = {
  input: UpdateFloorPlannerInput,
  condition?: ModelFloorPlannerConditionInput | null,
};

export type UpdateFloorPlannerMutation = {
  updateFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFloorPlannerMutationVariables = {
  input: DeleteFloorPlannerInput,
  condition?: ModelFloorPlannerConditionInput | null,
};

export type DeleteFloorPlannerMutation = {
  deleteFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserFloorPlannerMutationVariables = {
  input: CreateUserFloorPlannerInput,
  condition?: ModelUserFloorPlannerConditionInput | null,
};

export type CreateUserFloorPlannerMutation = {
  createUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserFloorPlannerMutationVariables = {
  input: UpdateUserFloorPlannerInput,
  condition?: ModelUserFloorPlannerConditionInput | null,
};

export type UpdateUserFloorPlannerMutation = {
  updateUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserFloorPlannerMutationVariables = {
  input: DeleteUserFloorPlannerInput,
  condition?: ModelUserFloorPlannerConditionInput | null,
};

export type DeleteUserFloorPlannerMutation = {
  deleteUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFloorPlannerQueryVariables = {
  id: string,
};

export type GetFloorPlannerQuery = {
  getFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFloorPlannersQueryVariables = {
  filter?: ModelFloorPlannerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFloorPlannersQuery = {
  listFloorPlanners?:  {
    __typename: "ModelFloorPlannerConnection",
    items:  Array< {
      __typename: "FloorPlanner",
      id: string,
      name: string,
      photo?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserFloorPlannerQueryVariables = {
  id: string,
};

export type GetUserFloorPlannerQuery = {
  getUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserFloorPlannersQueryVariables = {
  filter?: ModelUserFloorPlannerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserFloorPlannersQuery = {
  listUserFloorPlanners?:  {
    __typename: "ModelUserFloorPlannerConnection",
    items:  Array< {
      __typename: "UserFloorPlanner",
      id: string,
      name: string,
      email?: string | null,
      floorPlanner?: string | null,
      otherInfo?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFloorPlannerSubscriptionVariables = {
  filter?: ModelSubscriptionFloorPlannerFilterInput | null,
};

export type OnCreateFloorPlannerSubscription = {
  onCreateFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFloorPlannerSubscriptionVariables = {
  filter?: ModelSubscriptionFloorPlannerFilterInput | null,
};

export type OnUpdateFloorPlannerSubscription = {
  onUpdateFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFloorPlannerSubscriptionVariables = {
  filter?: ModelSubscriptionFloorPlannerFilterInput | null,
};

export type OnDeleteFloorPlannerSubscription = {
  onDeleteFloorPlanner?:  {
    __typename: "FloorPlanner",
    id: string,
    name: string,
    photo?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserFloorPlannerSubscriptionVariables = {
  filter?: ModelSubscriptionUserFloorPlannerFilterInput | null,
};

export type OnCreateUserFloorPlannerSubscription = {
  onCreateUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserFloorPlannerSubscriptionVariables = {
  filter?: ModelSubscriptionUserFloorPlannerFilterInput | null,
};

export type OnUpdateUserFloorPlannerSubscription = {
  onUpdateUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserFloorPlannerSubscriptionVariables = {
  filter?: ModelSubscriptionUserFloorPlannerFilterInput | null,
};

export type OnDeleteUserFloorPlannerSubscription = {
  onDeleteUserFloorPlanner?:  {
    __typename: "UserFloorPlanner",
    id: string,
    name: string,
    email?: string | null,
    floorPlanner?: string | null,
    otherInfo?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
