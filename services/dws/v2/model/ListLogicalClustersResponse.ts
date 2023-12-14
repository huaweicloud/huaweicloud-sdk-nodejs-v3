import { LogicalClusterInfo } from './LogicalClusterInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogicalClustersResponse extends SdkResponse {
    private 'logical_clusters'?: Array<LogicalClusterInfo>;
    public count?: number;
    private 'add_enable'?: boolean;
    public constructor() { 
        super();
    }
    public withLogicalClusters(logicalClusters: Array<LogicalClusterInfo>): ListLogicalClustersResponse {
        this['logical_clusters'] = logicalClusters;
        return this;
    }
    public set logicalClusters(logicalClusters: Array<LogicalClusterInfo>  | undefined) {
        this['logical_clusters'] = logicalClusters;
    }
    public get logicalClusters(): Array<LogicalClusterInfo> | undefined {
        return this['logical_clusters'];
    }
    public withCount(count: number): ListLogicalClustersResponse {
        this['count'] = count;
        return this;
    }
    public withAddEnable(addEnable: boolean): ListLogicalClustersResponse {
        this['add_enable'] = addEnable;
        return this;
    }
    public set addEnable(addEnable: boolean  | undefined) {
        this['add_enable'] = addEnable;
    }
    public get addEnable(): boolean | undefined {
        return this['add_enable'];
    }
}