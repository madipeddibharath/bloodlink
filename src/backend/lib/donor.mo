import Int "mo:core/Int";
import List "mo:core/List";
import Types "../types/donor";

module {
  public type DonorInternal = Types.DonorInternal;
  public type Donor = Types.Donor;
  public type DonorInput = Types.DonorInput;
  public type BloodGroup = Types.BloodGroup;

  /// Create a new mutable donor record
  public func new(id : Types.UserId, input : DonorInput, registeredAt : Types.Timestamp) : DonorInternal {
    {
      id;
      var name = input.name;
      var phone = input.phone;
      var age = input.age;
      var bloodGroup = input.bloodGroup;
      registeredAt;
    };
  };

  /// Convert internal mutable donor to shared public donor
  public func toPublic(self : DonorInternal) : Donor {
    {
      id = self.id;
      name = self.name;
      phone = self.phone;
      age = self.age;
      bloodGroup = self.bloodGroup;
      registeredAt = self.registeredAt;
    };
  };

  /// Check if donor matches the given blood group
  public func matchesBloodGroup(self : DonorInternal, bloodGroup : BloodGroup) : Bool {
    self.bloodGroup == bloodGroup;
  };

  /// Find a donor by caller principal
  public func findByPrincipal(donors : List.List<DonorInternal>, id : Types.UserId) : ?DonorInternal {
    donors.find(func(d) { d.id == id });
  };

  /// Search donors by blood group, sorted by most recently registered (newest first)
  public func searchByBloodGroup(donors : List.List<DonorInternal>, bloodGroup : BloodGroup) : [Donor] {
    let matched = donors.filter(func(d) { d.bloodGroup == bloodGroup });
    let sorted = matched.sort(func(a, b) { Int.compare(b.registeredAt, a.registeredAt) });
    sorted.map<DonorInternal, Donor>(func(d) { toPublic(d) }).toArray();
  };

  /// Update existing donor profile in-place
  public func updateProfile(self : DonorInternal, input : DonorInput) {
    self.name := input.name;
    self.phone := input.phone;
    self.age := input.age;
    self.bloodGroup := input.bloodGroup;
  };
};
