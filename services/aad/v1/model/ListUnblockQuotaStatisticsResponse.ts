
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUnblockQuotaStatisticsResponse extends SdkResponse {
    public type?: ListUnblockQuotaStatisticsResponseTypeEnum | string;
    private 'total_unblocking_quota'?: number;
    private 'remaining_unblocking_quota'?: number;
    private 'unblocking_quota_today'?: number;
    private 'remaining_unblocking_quota_today'?: number;
    public constructor() { 
        super();
    }
    public withType(type: ListUnblockQuotaStatisticsResponseTypeEnum | string): ListUnblockQuotaStatisticsResponse {
        this['type'] = type;
        return this;
    }
    public withTotalUnblockingQuota(totalUnblockingQuota: number): ListUnblockQuotaStatisticsResponse {
        this['total_unblocking_quota'] = totalUnblockingQuota;
        return this;
    }
    public set totalUnblockingQuota(totalUnblockingQuota: number  | undefined) {
        this['total_unblocking_quota'] = totalUnblockingQuota;
    }
    public get totalUnblockingQuota(): number | undefined {
        return this['total_unblocking_quota'];
    }
    public withRemainingUnblockingQuota(remainingUnblockingQuota: number): ListUnblockQuotaStatisticsResponse {
        this['remaining_unblocking_quota'] = remainingUnblockingQuota;
        return this;
    }
    public set remainingUnblockingQuota(remainingUnblockingQuota: number  | undefined) {
        this['remaining_unblocking_quota'] = remainingUnblockingQuota;
    }
    public get remainingUnblockingQuota(): number | undefined {
        return this['remaining_unblocking_quota'];
    }
    public withUnblockingQuotaToday(unblockingQuotaToday: number): ListUnblockQuotaStatisticsResponse {
        this['unblocking_quota_today'] = unblockingQuotaToday;
        return this;
    }
    public set unblockingQuotaToday(unblockingQuotaToday: number  | undefined) {
        this['unblocking_quota_today'] = unblockingQuotaToday;
    }
    public get unblockingQuotaToday(): number | undefined {
        return this['unblocking_quota_today'];
    }
    public withRemainingUnblockingQuotaToday(remainingUnblockingQuotaToday: number): ListUnblockQuotaStatisticsResponse {
        this['remaining_unblocking_quota_today'] = remainingUnblockingQuotaToday;
        return this;
    }
    public set remainingUnblockingQuotaToday(remainingUnblockingQuotaToday: number  | undefined) {
        this['remaining_unblocking_quota_today'] = remainingUnblockingQuotaToday;
    }
    public get remainingUnblockingQuotaToday(): number | undefined {
        return this['remaining_unblocking_quota_today'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUnblockQuotaStatisticsResponseTypeEnum {
    COMMON_USER = 'common_user',
    NATIVE_PROTECTION_USER = 'native_protection_user'
}
