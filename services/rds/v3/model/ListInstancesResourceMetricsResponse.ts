import { ResourceMonitoringInfo } from './ResourceMonitoringInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResourceMetricsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'resource_monitoring_infos'?: Array<ResourceMonitoringInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListInstancesResourceMetricsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResourceMonitoringInfos(resourceMonitoringInfos: Array<ResourceMonitoringInfo>): ListInstancesResourceMetricsResponse {
        this['resource_monitoring_infos'] = resourceMonitoringInfos;
        return this;
    }
    public set resourceMonitoringInfos(resourceMonitoringInfos: Array<ResourceMonitoringInfo>  | undefined) {
        this['resource_monitoring_infos'] = resourceMonitoringInfos;
    }
    public get resourceMonitoringInfos(): Array<ResourceMonitoringInfo> | undefined {
        return this['resource_monitoring_infos'];
    }
}