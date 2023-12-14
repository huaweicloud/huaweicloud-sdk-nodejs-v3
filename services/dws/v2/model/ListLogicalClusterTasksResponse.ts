import { LogicalClusterTaskInfo } from './LogicalClusterTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogicalClusterTasksResponse extends SdkResponse {
    private 'logical_cluster_tasks'?: Array<LogicalClusterTaskInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withLogicalClusterTasks(logicalClusterTasks: Array<LogicalClusterTaskInfo>): ListLogicalClusterTasksResponse {
        this['logical_cluster_tasks'] = logicalClusterTasks;
        return this;
    }
    public set logicalClusterTasks(logicalClusterTasks: Array<LogicalClusterTaskInfo>  | undefined) {
        this['logical_cluster_tasks'] = logicalClusterTasks;
    }
    public get logicalClusterTasks(): Array<LogicalClusterTaskInfo> | undefined {
        return this['logical_cluster_tasks'];
    }
    public withCount(count: number): ListLogicalClusterTasksResponse {
        this['count'] = count;
        return this;
    }
}