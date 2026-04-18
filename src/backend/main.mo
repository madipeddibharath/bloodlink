import List "mo:core/List";
import Types "types/donor";
import DonorApi "mixins/donor-api";

actor {
  let donors = List.empty<Types.DonorInternal>();

  include DonorApi(donors);
};
