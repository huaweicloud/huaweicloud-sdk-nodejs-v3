

export class SyncConnectionsNewRequestBody {
    private 'engine_type'?: string;
    public constructor() { 
    }
    public withEngineType(engineType: string): SyncConnectionsNewRequestBody {
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