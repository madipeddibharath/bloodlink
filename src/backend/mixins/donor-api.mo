import List "mo:core/List";
import Time "mo:core/Time";
import DonorLib "../lib/donor";
import Types "../types/donor";

mixin (donors : List.List<Types.DonorInternal>) {

  /// Register a new donor profile for the caller.
  /// Returns #ok if successful, #err if already registered.
  public shared ({ caller }) func registerDonor(input : Types.DonorInput) : async { #ok; #err : Text } {
    switch (DonorLib.findByPrincipal(donors, caller)) {
      case (?_) { #err("Already registered. Use updateDonor to update your profile.") };
      case null {
        let donor = DonorLib.new(caller, input, Time.now());
        donors.add(donor);
        #ok;
      };
    };
  };

  /// Update the caller's own donor profile.
  /// Returns #ok if successful, #err if not registered.
  public shared ({ caller }) func updateDonor(input : Types.DonorInput) : async { #ok; #err : Text } {
    switch (DonorLib.findByPrincipal(donors, caller)) {
      case (?donor) {
        donor.updateProfile(input);
        #ok;
      };
      case null { #err("Not registered. Use registerDonor to create your profile.") };
    };
  };

  /// Get the caller's own donor profile.
  public shared query ({ caller }) func getMyProfile() : async ?Types.Donor {
    switch (DonorLib.findByPrincipal(donors, caller)) {
      case (?donor) { ?donor.toPublic() };
      case null { null };
    };
  };

  /// Search donors by blood group. Returns list sorted by most recently registered.
  public query func searchDonors(bloodGroup : Types.BloodGroup) : async [Types.Donor] {
    DonorLib.searchByBloodGroup(donors, bloodGroup);
  };
};
