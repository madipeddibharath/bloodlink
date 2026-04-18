import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;

  public type BloodGroup = {
    #APos;
    #ANeg;
    #BPos;
    #BNeg;
    #ABPos;
    #ABNeg;
    #OPos;
    #ONeg;
  };

  // Internal mutable donor record
  public type DonorInternal = {
    id : UserId;
    var name : Text;
    var phone : Text;
    var age : Nat;
    var bloodGroup : BloodGroup;
    registeredAt : Timestamp;
  };

  // Shared/public donor record for API boundary
  public type Donor = {
    id : UserId;
    name : Text;
    phone : Text;
    age : Nat;
    bloodGroup : BloodGroup;
    registeredAt : Timestamp;
  };

  // Input type for registration / profile update
  public type DonorInput = {
    name : Text;
    phone : Text;
    age : Nat;
    bloodGroup : BloodGroup;
  };
};
