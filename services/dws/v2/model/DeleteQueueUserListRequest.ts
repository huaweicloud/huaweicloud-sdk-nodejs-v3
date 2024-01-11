import { WorkloadQueueUserReq } from './WorkloadQueueUserReq';


export class DeleteQueueUserListRequest {
    private 'cluster_id'?: string;
    private 'queue_name'?: string;
    public body?: WorkloadQueueUserReq;
    public constructor(clusterId?: string, queueName?: string) { 
        this['cluster_id'] = clusterId;
        this['queue_name'] = queueName;
    }
    public withClusterId(clusterId: string): DeleteQueueUserListRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withQueueName(queueName: string): DeleteQueueUserListRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withBody(body: WorkloadQueueUserReq): DeleteQueueUserListRequest {
        this['body'] = body;
        return this;
    }
}