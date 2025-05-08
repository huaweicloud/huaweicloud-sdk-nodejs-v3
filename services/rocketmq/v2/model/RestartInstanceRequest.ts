

export class RestartInstanceRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): RestartInstanceRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): RestartInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}