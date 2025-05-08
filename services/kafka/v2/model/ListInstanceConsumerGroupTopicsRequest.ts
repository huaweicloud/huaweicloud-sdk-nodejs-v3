

export class ListInstanceConsumerGroupTopicsRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public topic?: string;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): ListInstanceConsumerGroupTopicsRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstanceConsumerGroupTopicsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ListInstanceConsumerGroupTopicsRequest {
        this['group'] = group;
        return this;
    }
    public withOffset(offset: number): ListInstanceConsumerGroupTopicsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceConsumerGroupTopicsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListInstanceConsumerGroupTopicsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListInstanceConsumerGroupTopicsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withTopic(topic: string): ListInstanceConsumerGroupTopicsRequest {
        this['topic'] = topic;
        return this;
    }
}