

export class ShowFragmentSwitchRequest {
    private 'connection_id'?: string;
    private 'engine_type'?: string;
    public constructor(connectionId?: string, engineType?: string) { 
        this['connection_id'] = connectionId;
        this['engine_type'] = engineType;
    }
    public withConnectionId(connectionId: string): ShowFragmentSwitchRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withEngineType(engineType: string): ShowFragmentSwitchRequest {
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