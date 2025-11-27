
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebTamperProtectStatisticsResponse extends SdkResponse {
    private 'protect_failed_nums'?: number;
    private 'redundant_nums'?: number;
    private 'unprotect_nums'?: number;
    private 'protected_nums'?: number;
    private 'protect_total_nums'?: number;
    private 'protected_event_nums'?: number;
    public constructor() { 
        super();
    }
    public withProtectFailedNums(protectFailedNums: number): ListWebTamperProtectStatisticsResponse {
        this['protect_failed_nums'] = protectFailedNums;
        return this;
    }
    public set protectFailedNums(protectFailedNums: number  | undefined) {
        this['protect_failed_nums'] = protectFailedNums;
    }
    public get protectFailedNums(): number | undefined {
        return this['protect_failed_nums'];
    }
    public withRedundantNums(redundantNums: number): ListWebTamperProtectStatisticsResponse {
        this['redundant_nums'] = redundantNums;
        return this;
    }
    public set redundantNums(redundantNums: number  | undefined) {
        this['redundant_nums'] = redundantNums;
    }
    public get redundantNums(): number | undefined {
        return this['redundant_nums'];
    }
    public withUnprotectNums(unprotectNums: number): ListWebTamperProtectStatisticsResponse {
        this['unprotect_nums'] = unprotectNums;
        return this;
    }
    public set unprotectNums(unprotectNums: number  | undefined) {
        this['unprotect_nums'] = unprotectNums;
    }
    public get unprotectNums(): number | undefined {
        return this['unprotect_nums'];
    }
    public withProtectedNums(protectedNums: number): ListWebTamperProtectStatisticsResponse {
        this['protected_nums'] = protectedNums;
        return this;
    }
    public set protectedNums(protectedNums: number  | undefined) {
        this['protected_nums'] = protectedNums;
    }
    public get protectedNums(): number | undefined {
        return this['protected_nums'];
    }
    public withProtectTotalNums(protectTotalNums: number): ListWebTamperProtectStatisticsResponse {
        this['protect_total_nums'] = protectTotalNums;
        return this;
    }
    public set protectTotalNums(protectTotalNums: number  | undefined) {
        this['protect_total_nums'] = protectTotalNums;
    }
    public get protectTotalNums(): number | undefined {
        return this['protect_total_nums'];
    }
    public withProtectedEventNums(protectedEventNums: number): ListWebTamperProtectStatisticsResponse {
        this['protected_event_nums'] = protectedEventNums;
        return this;
    }
    public set protectedEventNums(protectedEventNums: number  | undefined) {
        this['protected_event_nums'] = protectedEventNums;
    }
    public get protectedEventNums(): number | undefined {
        return this['protected_event_nums'];
    }
}