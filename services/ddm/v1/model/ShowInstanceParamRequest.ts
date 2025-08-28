

export class ShowInstanceParamRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowInstanceParamRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowInstanceParamRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowInstanceParamRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowInstanceParamRequest {
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