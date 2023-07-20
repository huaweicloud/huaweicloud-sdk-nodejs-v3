

export class FlowLog {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    private 'log_store_type'?: string;
    private 'log_aggregation_interval'?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public state?: string;
    public enabled?: boolean;
    public constructor(id?: string, name?: string, projectId?: string, resourceType?: string, resourceId?: string, logGroupId?: string, logStreamId?: string, logStoreType?: string, createdAt?: Date, state?: string, enabled?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['log_group_id'] = logGroupId;
        this['log_stream_id'] = logStreamId;
        this['log_store_type'] = logStoreType;
        this['created_at'] = createdAt;
        this['state'] = state;
        this['enabled'] = enabled;
    }
    public withId(id: string): FlowLog {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlowLog {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FlowLog {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): FlowLog {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceType(resourceType: string): FlowLog {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): FlowLog {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLogGroupId(logGroupId: string): FlowLog {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): FlowLog {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStoreType(logStoreType: string): FlowLog {
        this['log_store_type'] = logStoreType;
        return this;
    }
    public set logStoreType(logStoreType: string  | undefined) {
        this['log_store_type'] = logStoreType;
    }
    public get logStoreType(): string | undefined {
        return this['log_store_type'];
    }
    public withLogAggregationInterval(logAggregationInterval: number): FlowLog {
        this['log_aggregation_interval'] = logAggregationInterval;
        return this;
    }
    public set logAggregationInterval(logAggregationInterval: number  | undefined) {
        this['log_aggregation_interval'] = logAggregationInterval;
    }
    public get logAggregationInterval(): number | undefined {
        return this['log_aggregation_interval'];
    }
    public withCreatedAt(createdAt: Date): FlowLog {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): FlowLog {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withState(state: string): FlowLog {
        this['state'] = state;
        return this;
    }
    public withEnabled(enabled: boolean): FlowLog {
        this['enabled'] = enabled;
        return this;
    }
}