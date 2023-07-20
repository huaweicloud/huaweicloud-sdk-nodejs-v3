import { WorkloadResource } from './WorkloadResource';


export class WorkloadQueue {
    private 'workload_queue_name'?: string;
    private 'logical_cluster_name'?: string;
    private 'workload_resource_item_list'?: Array<WorkloadResource>;
    public constructor(workloadQueueName?: string, workloadResourceItemList?: Array<WorkloadResource>) { 
        this['workload_queue_name'] = workloadQueueName;
        this['workload_resource_item_list'] = workloadResourceItemList;
    }
    public withWorkloadQueueName(workloadQueueName: string): WorkloadQueue {
        this['workload_queue_name'] = workloadQueueName;
        return this;
    }
    public set workloadQueueName(workloadQueueName: string  | undefined) {
        this['workload_queue_name'] = workloadQueueName;
    }
    public get workloadQueueName(): string | undefined {
        return this['workload_queue_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): WorkloadQueue {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withWorkloadResourceItemList(workloadResourceItemList: Array<WorkloadResource>): WorkloadQueue {
        this['workload_resource_item_list'] = workloadResourceItemList;
        return this;
    }
    public set workloadResourceItemList(workloadResourceItemList: Array<WorkloadResource>  | undefined) {
        this['workload_resource_item_list'] = workloadResourceItemList;
    }
    public get workloadResourceItemList(): Array<WorkloadResource> | undefined {
        return this['workload_resource_item_list'];
    }
}