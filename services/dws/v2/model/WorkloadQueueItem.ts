import { WorkloadResourceItem } from './WorkloadResourceItem';


export class WorkloadQueueItem {
    private 'queue_name'?: string;
    private 'logical_cluster_name'?: string;
    private 'short_query_optimize'?: string;
    private 'short_query_concurrency_num'?: number;
    private 'resource_item_list'?: Array<WorkloadResourceItem>;
    public constructor(queueName?: string, resourceItemList?: Array<WorkloadResourceItem>) { 
        this['queue_name'] = queueName;
        this['resource_item_list'] = resourceItemList;
    }
    public withQueueName(queueName: string): WorkloadQueueItem {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withLogicalClusterName(logicalClusterName: string): WorkloadQueueItem {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withShortQueryOptimize(shortQueryOptimize: string): WorkloadQueueItem {
        this['short_query_optimize'] = shortQueryOptimize;
        return this;
    }
    public set shortQueryOptimize(shortQueryOptimize: string  | undefined) {
        this['short_query_optimize'] = shortQueryOptimize;
    }
    public get shortQueryOptimize(): string | undefined {
        return this['short_query_optimize'];
    }
    public withShortQueryConcurrencyNum(shortQueryConcurrencyNum: number): WorkloadQueueItem {
        this['short_query_concurrency_num'] = shortQueryConcurrencyNum;
        return this;
    }
    public set shortQueryConcurrencyNum(shortQueryConcurrencyNum: number  | undefined) {
        this['short_query_concurrency_num'] = shortQueryConcurrencyNum;
    }
    public get shortQueryConcurrencyNum(): number | undefined {
        return this['short_query_concurrency_num'];
    }
    public withResourceItemList(resourceItemList: Array<WorkloadResourceItem>): WorkloadQueueItem {
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