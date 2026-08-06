

export class SwitchFullsqlSwitchRequest {
    private 'engine_type'?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withEngineType(engineType: string): SwitchFullsqlSwitchRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInstanceId(instanceId: string): SwitchFullsqlSwitchRequest {
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