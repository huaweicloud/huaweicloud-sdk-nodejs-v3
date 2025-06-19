

export class ShowInstanceNodesRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ShowInstanceNodesRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ShowInstanceNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ShowInstanceNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowInstanceNodesRequest {
        this['offset'] = offset;
        return this;
    }
}