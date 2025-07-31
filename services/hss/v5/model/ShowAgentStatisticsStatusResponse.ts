
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgentStatisticsStatusResponse extends SdkResponse {
    public online?: number;
    public offline?: number;
    private 'not_installed'?: number;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withOnline(online: number): ShowAgentStatisticsStatusResponse {
        this['online'] = online;
        return this;
    }
    public withOffline(offline: number): ShowAgentStatisticsStatusResponse {
        this['offline'] = offline;
        return this;
    }
    public withNotInstalled(notInstalled: number): ShowAgentStatisticsStatusResponse {
        this['not_installed'] = notInstalled;
        return this;
    }
    public set notInstalled(notInstalled: number  | undefined) {
        this['not_installed'] = notInstalled;
    }
    public get notInstalled(): number | undefined {
        return this['not_installed'];
    }
    public withTotalNum(totalNum: number): ShowAgentStatisticsStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}