
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentStatisticsResponse extends SdkResponse {
    private 'wait_upgrade_num'?: number;
    private 'online_num'?: number;
    private 'not_online_num'?: number;
    private 'offline_num'?: number;
    private 'incluster_num'?: number;
    private 'not_incluster_num'?: number;
    public constructor() { 
        super();
    }
    public withWaitUpgradeNum(waitUpgradeNum: number): ShowAgentStatisticsResponse {
        this['wait_upgrade_num'] = waitUpgradeNum;
        return this;
    }
    public set waitUpgradeNum(waitUpgradeNum: number  | undefined) {
        this['wait_upgrade_num'] = waitUpgradeNum;
    }
    public get waitUpgradeNum(): number | undefined {
        return this['wait_upgrade_num'];
    }
    public withOnlineNum(onlineNum: number): ShowAgentStatisticsResponse {
        this['online_num'] = onlineNum;
        return this;
    }
    public set onlineNum(onlineNum: number  | undefined) {
        this['online_num'] = onlineNum;
    }
    public get onlineNum(): number | undefined {
        return this['online_num'];
    }
    public withNotOnlineNum(notOnlineNum: number): ShowAgentStatisticsResponse {
        this['not_online_num'] = notOnlineNum;
        return this;
    }
    public set notOnlineNum(notOnlineNum: number  | undefined) {
        this['not_online_num'] = notOnlineNum;
    }
    public get notOnlineNum(): number | undefined {
        return this['not_online_num'];
    }
    public withOfflineNum(offlineNum: number): ShowAgentStatisticsResponse {
        this['offline_num'] = offlineNum;
        return this;
    }
    public set offlineNum(offlineNum: number  | undefined) {
        this['offline_num'] = offlineNum;
    }
    public get offlineNum(): number | undefined {
        return this['offline_num'];
    }
    public withInclusterNum(inclusterNum: number): ShowAgentStatisticsResponse {
        this['incluster_num'] = inclusterNum;
        return this;
    }
    public set inclusterNum(inclusterNum: number  | undefined) {
        this['incluster_num'] = inclusterNum;
    }
    public get inclusterNum(): number | undefined {
        return this['incluster_num'];
    }
    public withNotInclusterNum(notInclusterNum: number): ShowAgentStatisticsResponse {
        this['not_incluster_num'] = notInclusterNum;
        return this;
    }
    public set notInclusterNum(notInclusterNum: number  | undefined) {
        this['not_incluster_num'] = notInclusterNum;
    }
    public get notInclusterNum(): number | undefined {
        return this['not_incluster_num'];
    }
}