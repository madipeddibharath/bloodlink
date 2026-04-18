import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = Principal;
export type Timestamp = bigint;
export interface Donor {
    id: UserId;
    age: bigint;
    name: string;
    bloodGroup: BloodGroup;
    phone: string;
    registeredAt: Timestamp;
}
export interface DonorInput {
    age: bigint;
    name: string;
    bloodGroup: BloodGroup;
    phone: string;
}
export enum BloodGroup {
    ANeg = "ANeg",
    APos = "APos",
    BNeg = "BNeg",
    BPos = "BPos",
    ONeg = "ONeg",
    OPos = "OPos",
    ABNeg = "ABNeg",
    ABPos = "ABPos"
}
export interface backendInterface {
    getMyProfile(): Promise<Donor | null>;
    registerDonor(input: DonorInput): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    searchDonors(bloodGroup: BloodGroup): Promise<Array<Donor>>;
    updateDonor(input: DonorInput): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
