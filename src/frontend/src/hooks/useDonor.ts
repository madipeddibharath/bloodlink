import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { BloodGroup, Donor, DonorInput } from "../types/donor";

function useBackendActor() {
  return useActor(createActor);
}

export function useGetMyProfile() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Donor | null>({
    queryKey: ["myProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchDonors(bloodGroup: BloodGroup | null) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Donor[]>({
    queryKey: ["searchDonors", bloodGroup],
    queryFn: async () => {
      if (!actor || !bloodGroup) return [];
      return actor.searchDonors(bloodGroup);
    },
    enabled: !!actor && !isFetching && bloodGroup !== null,
  });
}

export function useRegisterDonor() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: DonorInput) => {
      if (!actor) throw new Error("Not connected");
      const result = await actor.registerDonor(input);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}

export function useUpdateDonor() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: DonorInput) => {
      if (!actor) throw new Error("Not connected");
      const result = await actor.updateDonor(input);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
}
