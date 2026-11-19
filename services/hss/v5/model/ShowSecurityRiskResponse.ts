import { ContainerRiskInfo } from './ContainerRiskInfo';
import { HostRiskInfo } from './HostRiskInfo';
import { TrendRiskInfo } from './TrendRiskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityRiskResponse extends SdkResponse {
    private 'host_risk_info'?: HostRiskInfo;
    private 'container_risk_info'?: ContainerRiskInfo;
    private 'trend_data_list'?: Array<TrendRiskInfo>;
    public constructor() { 
        super();
    }
    public withHostRiskInfo(hostRiskInfo: HostRiskInfo): ShowSecurityRiskResponse {
        this['host_risk_info'] = hostRiskInfo;
        return this;
    }
    public set hostRiskInfo(hostRiskInfo: HostRiskInfo  | undefined) {
        this['host_risk_info'] = hostRiskInfo;
    }
    public get hostRiskInfo(): HostRiskInfo | undefined {
        return this['host_risk_info'];
    }
    public withContainerRiskInfo(containerRiskInfo: ContainerRiskInfo): ShowSecurityRiskResponse {
        this['container_risk_info'] = containerRiskInfo;
        return this;
    }
    public set containerRiskInfo(containerRiskInfo: ContainerRiskInfo  | undefined) {
        this['container_risk_info'] = containerRiskInfo;
    }
    public get containerRiskInfo(): ContainerRiskInfo | undefined {
        return this['container_risk_info'];
    }
    public withTrendDataList(trendDataList: Array<TrendRiskInfo>): ShowSecurityRiskResponse {
        this['trend_data_list'] = trendDataList;
        return this;
    }
    public set trendDataList(trendDataList: Array<TrendRiskInfo>  | undefined) {
        this['trend_data_list'] = trendDataList;
    }
    public get trendDataList(): Array<TrendRiskInfo> | undefined {
        return this['trend_data_list'];
    }
}