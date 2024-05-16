

export class QueueSrcAssignCreateDTO {
    private 'source_type'?: string;
    private 'queue_name'?: Array<string>;
    private 'conn_id'?: string;
    private 'cluster_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withSourceType(sourceType: string): QueueSrcAssignCreateDTO {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withQueueName(queueName: Array<string>): QueueSrcAssignCreateDTO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: Array<string>  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): Array<string> | undefined {
        return this['queue_name'];
    }
    public withConnId(connId: string): QueueSrcAssignCreateDTO {
        this['conn_id'] = connId;
        return this;
    }
    public set connId(connId: string  | undefined) {
        this['conn_id'] = connId;
    }
    public get connId(): string | undefined {
        return this['conn_id'];
    }
    public withClusterId(clusterId: string): QueueSrcAssignCreateDTO {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDescription(description: string): QueueSrcAssignCreateDTO {
        this['description'] = description;
        return this;
    }
}