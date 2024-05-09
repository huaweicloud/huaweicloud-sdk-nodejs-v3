

export class ListStarRocksDataReplicationsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(instanceId?: string, xLanguage?: string) { 
        this['instance_id'] = instanceId;
        this['X-Language'] = xLanguage;
    }
    public withInstanceId(instanceId: string): ListStarRocksDataReplicationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ListStarRocksDataReplicationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: string): ListStarRocksDataReplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListStarRocksDataReplicationsRequest {
        this['offset'] = offset;
        return this;
    }
}