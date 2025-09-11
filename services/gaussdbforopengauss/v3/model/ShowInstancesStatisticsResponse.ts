import { InstancesStatisticsResponseBodyInstancesStatistics } from './InstancesStatisticsResponseBodyInstancesStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstancesStatisticsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'instances_statistics'?: Array<InstancesStatisticsResponseBodyInstancesStatistics>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowInstancesStatisticsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstancesStatistics(instancesStatistics: Array<InstancesStatisticsResponseBodyInstancesStatistics>): ShowInstancesStatisticsResponse {
        this['instances_statistics'] = instancesStatistics;
        return this;
    }
    public set instancesStatistics(instancesStatistics: Array<InstancesStatisticsResponseBodyInstancesStatistics>  | undefined) {
        this['instances_statistics'] = instancesStatistics;
    }
    public get instancesStatistics(): Array<InstancesStatisticsResponseBodyInstancesStatistics> | undefined {
        return this['instances_statistics'];
    }
}