

export class ShowStarrocksParamsRequest {
    private 'instance_id'?: string;
    private 'node_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, nodeType?: string) { 
        this['instance_id'] = instanceId;
        this['node_type'] = nodeType;
    }
    public withInstanceId(instanceId: string): ShowStarrocksParamsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeType(nodeType: string): ShowStarrocksParamsRequest {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withOffset(offset: number): ShowStarrocksParamsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowStarrocksParamsRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowStarrocksParamsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}