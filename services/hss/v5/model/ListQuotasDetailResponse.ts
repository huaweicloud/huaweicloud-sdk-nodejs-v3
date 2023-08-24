import { QuotaResourcesResponseInfo } from './QuotaResourcesResponseInfo';
import { QuotaStatisticsResponseInfo } from './QuotaStatisticsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasDetailResponse extends SdkResponse {
    private 'packet_cycle_num'?: number;
    private 'on_demand_num'?: number;
    private 'used_num'?: number;
    private 'idle_num'?: number;
    private 'normal_num'?: number;
    private 'expired_num'?: number;
    private 'freeze_num'?: number;
    private 'quota_statistics_list'?: Array<QuotaStatisticsResponseInfo>;
    private 'total_num'?: number;
    private 'data_list'?: Array<QuotaResourcesResponseInfo>;
    public constructor() { 
        super();
    }
    public withPacketCycleNum(packetCycleNum: number): ListQuotasDetailResponse {
        this['packet_cycle_num'] = packetCycleNum;
        return this;
    }
    public set packetCycleNum(packetCycleNum: number  | undefined) {
        this['packet_cycle_num'] = packetCycleNum;
    }
    public get packetCycleNum(): number | undefined {
        return this['packet_cycle_num'];
    }
    public withOnDemandNum(onDemandNum: number): ListQuotasDetailResponse {
        this['on_demand_num'] = onDemandNum;
        return this;
    }
    public set onDemandNum(onDemandNum: number  | undefined) {
        this['on_demand_num'] = onDemandNum;
    }
    public get onDemandNum(): number | undefined {
        return this['on_demand_num'];
    }
    public withUsedNum(usedNum: number): ListQuotasDetailResponse {
        this['used_num'] = usedNum;
        return this;
    }
    public set usedNum(usedNum: number  | undefined) {
        this['used_num'] = usedNum;
    }
    public get usedNum(): number | undefined {
        return this['used_num'];
    }
    public withIdleNum(idleNum: number): ListQuotasDetailResponse {
        this['idle_num'] = idleNum;
        return this;
    }
    public set idleNum(idleNum: number  | undefined) {
        this['idle_num'] = idleNum;
    }
    public get idleNum(): number | undefined {
        return this['idle_num'];
    }
    public withNormalNum(normalNum: number): ListQuotasDetailResponse {
        this['normal_num'] = normalNum;
        return this;
    }
    public set normalNum(normalNum: number  | undefined) {
        this['normal_num'] = normalNum;
    }
    public get normalNum(): number | undefined {
        return this['normal_num'];
    }
    public withExpiredNum(expiredNum: number): ListQuotasDetailResponse {
        this['expired_num'] = expiredNum;
        return this;
    }
    public set expiredNum(expiredNum: number  | undefined) {
        this['expired_num'] = expiredNum;
    }
    public get expiredNum(): number | undefined {
        return this['expired_num'];
    }
    public withFreezeNum(freezeNum: number): ListQuotasDetailResponse {
        this['freeze_num'] = freezeNum;
        return this;
    }
    public set freezeNum(freezeNum: number  | undefined) {
        this['freeze_num'] = freezeNum;
    }
    public get freezeNum(): number | undefined {
        return this['freeze_num'];
    }
    public withQuotaStatisticsList(quotaStatisticsList: Array<QuotaStatisticsResponseInfo>): ListQuotasDetailResponse {
        this['quota_statistics_list'] = quotaStatisticsList;
        return this;
    }
    public set quotaStatisticsList(quotaStatisticsList: Array<QuotaStatisticsResponseInfo>  | undefined) {
        this['quota_statistics_list'] = quotaStatisticsList;
    }
    public get quotaStatisticsList(): Array<QuotaStatisticsResponseInfo> | undefined {
        return this['quota_statistics_list'];
    }
    public withTotalNum(totalNum: number): ListQuotasDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<QuotaResourcesResponseInfo>): ListQuotasDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<QuotaResourcesResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<QuotaResourcesResponseInfo> | undefined {
        return this['data_list'];
    }
}