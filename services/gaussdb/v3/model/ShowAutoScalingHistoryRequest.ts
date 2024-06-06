

export class ShowAutoScalingHistoryRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ShowAutoScalingHistoryRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowAutoScalingHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: string): ShowAutoScalingHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowAutoScalingHistoryRequest {
        this['offset'] = offset;
        return this;
    }
}