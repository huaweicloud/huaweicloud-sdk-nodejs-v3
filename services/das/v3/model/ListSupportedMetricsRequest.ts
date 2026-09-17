

export class ListSupportedMetricsRequest {
    private 'engine_type'?: string;
    private 'instance_mode'?: string;
    public constructor(engineType?: string) { 
        this['engine_type'] = engineType;
    }
    public withEngineType(engineType: string): ListSupportedMetricsRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInstanceMode(instanceMode: string): ListSupportedMetricsRequest {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
}