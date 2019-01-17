import gql from "graphql-tag";

// We use the gql tag to parse our query string into a query document

//Hello world sample, please remove
export const getHelloWorld = gql`
  query getHelloWorldFromVehicle{
    getHelloWorldFromVehicle{
      sn
    }
  }
`;


//Hello world sample, please remove
export const VehicleHelloWorldSubscription = gql`
  subscription{
    VehicleHelloWorldSubscription{
      sn
  }
}`;

export const VehicleVehicle = gql`
  query VehicleVehicleEntity($id: String!) {
    VehicleVehicleEntity(id: $id) {
      _id
      generalInfo {
        licensePlate
        model
        brand
        line
      }
      blockings
      state
      creationTimestamp
      creatorUser
      modificationTimestamp
      modifierUser
    }
  }
`;

export const VehicleVehicles = gql`
  query VehicleVehicles($filterInput: FilterInput!, $paginationInput: PaginationInput!) {
    VehicleVehicles(filterInput: $filterInput, paginationInput: $paginationInput) {
      _id
      generalInfo {
        licensePlate
        model
        brand
        line
      }
      state
      creationTimestamp
      creatorUser
      modificationTimestamp
      modifierUser
    }
  }
`;

export const VehicleVehiclesSize = gql`
  query VehicleVehiclesSize($filterInput: FilterInput!) {
    VehicleVehiclesSize(filterInput: $filterInput)
  }
`;

export const VehicleCreateVehicle = gql `
  mutation VehicleCreateVehicle($input: VehicleVehicleInput!){
    VehicleCreateVehicle(input: $input){
      code
      message
    }
  }
`;

export const VehicleUpdateVehicleGeneralInfo = gql `
  mutation VehicleUpdateVehicleGeneralInfo($id: ID!, $input: VehicleVehicleGeneralInfoInput!){
    VehicleUpdateVehicleGeneralInfo(id: $id, input: $input){
      code
      message
    }
  }
`;

export const VehicleUpdateVehicleState = gql `
  mutation VehicleUpdateVehicleState($id: ID!, $newState: Boolean!){
    VehicleUpdateVehicleState(id: $id, newState: $newState){
      code
      message
    }
  }
`;

// SUBSCRIPTION
export const VehicleVehicleUpdatedSubscription = gql`
  subscription{
    VehicleVehicleUpdatedSubscription{
      _id
      generalInfo {
        licensePlate
        model
        brand
        line
      }
      state
      creationTimestamp
      creatorUser
      modificationTimestamp
      modifierUser
    }
  }
`;
