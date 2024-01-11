import { WorkloadResourceItem } from './WorkloadResourceItem';


export class WorkloadQueueInfo {
    private 'workload_queue_name'?: string;
    private 'logical_cluster_name'?: string;
    private 'resource_item_list'?: Array<WorkloadResourceItem>;
    public constructor(workloadQueueName?: string, resourceItemList?: Array<WorkloadResourceItem>) { 
        this['workload_queue_name'] = workloadQueueName;
        this['resource_item_list'] = resourceItemList;
    }
    public withWorkloadQueueName(workloadQueueName: string): WorkloadQueueInfo {
        this['workload_queue_name'] = workloadQueueName;
        return this;
    }
    public set workloadQueueName(workloadQueueName: string  | undefined) {
        this['workload_queue_name'] = workloadQueueName;
    }
    public get workloadQueueName(): string | undefined {
        return this['workload_queue_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): WorkloadQueueInfo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withResourceItemList(resourceItemList: Array<WorkloadResourceItem>): WorkloadQueueInfo {
        this['resource_item_list'] = resourceItemList;
        return this;
    }
    public set resourceItemList(resourceItemList: Array<WorkloadResourceItem>  | undefined) {
        this['resource_item_list'] = resourceItemList;
    }
    public get resourceItemList(): Array<WorkloadResourceItem> | undefined {
        return this['resource_item_list'];
    }
}