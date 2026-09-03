

export class ListNotSetChargeModeInstanceRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListNotSetChargeModeInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ListNotSetChargeModeInstanceRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}