

export class ModelGroupItemVO {
    public id?: string;
    public name?: string;
    public description?: string;
    public priority?: number;
    private 'default_model_id'?: string;
    private 'provider_count'?: number;
    private 'resource_count'?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): ModelGroupItemVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModelGroupItemVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModelGroupItemVO {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): ModelGroupItemVO {
        this['priority'] = priority;
        return this;
    }
    public withDefaultModelId(defaultModelId: string): ModelGroupItemVO {
        this['default_model_id'] = defaultModelId;
        return this;
    }
    public set defaultModelId(defaultModelId: string  | undefined) {
        this['default_model_id'] = defaultModelId;
    }
    public get defaultModelId(): string | undefined {
        return this['default_model_id'];
    }
    public withProviderCount(providerCount: number): ModelGroupItemVO {
        this['provider_count'] = providerCount;
        return this;
    }
    public set providerCount(providerCount: number  | undefined) {
        this['provider_count'] = providerCount;
    }
    public get providerCount(): number | undefined {
        return this['provider_count'];
    }
    public withResourceCount(resourceCount: number): ModelGroupItemVO {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number  | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount(): number | undefined {
        return this['resource_count'];
    }
    public withCreateTime(createTime: string): ModelGroupItemVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ModelGroupItemVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}