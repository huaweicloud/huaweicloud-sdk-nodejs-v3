

export class ListFlavorsRequest {
    private 'engine_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(engineId?: string) { 
        this['engine_id'] = engineId;
    }
    public withEngineId(engineId: string): ListFlavorsRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withOffset(offset: number): ListFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
}