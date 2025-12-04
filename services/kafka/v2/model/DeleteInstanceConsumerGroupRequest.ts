

export class DeleteInstanceConsumerGroupRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): DeleteInstanceConsumerGroupRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): DeleteInstanceConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): DeleteInstanceConsumerGroupRequest {
        this['group'] = group;
        return this;
    }
}