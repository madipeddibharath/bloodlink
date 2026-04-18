import { BloodGroup } from "../backend";

export { BloodGroup };

export type { Donor, DonorInput } from "../backend";

export const BLOOD_GROUP_OPTIONS: { value: BloodGroup; label: string }[] = [
  { value: BloodGroup.APos, label: "A+" },
  { value: BloodGroup.ANeg, label: "A−" },
  { value: BloodGroup.BPos, label: "B+" },
  { value: BloodGroup.BNeg, label: "B−" },
  { value: BloodGroup.ABPos, label: "AB+" },
  { value: BloodGroup.ABNeg, label: "AB−" },
  { value: BloodGroup.OPos, label: "O+" },
  { value: BloodGroup.ONeg, label: "O−" },
];

export function formatBloodGroup(bg: BloodGroup): string {
  const map: Record<BloodGroup, string> = {
    [BloodGroup.APos]: "A+",
    [BloodGroup.ANeg]: "A−",
    [BloodGroup.BPos]: "B+",
    [BloodGroup.BNeg]: "B−",
    [BloodGroup.ABPos]: "AB+",
    [BloodGroup.ABNeg]: "AB−",
    [BloodGroup.OPos]: "O+",
    [BloodGroup.ONeg]: "O−",
  };
  return map[bg] ?? bg;
}
