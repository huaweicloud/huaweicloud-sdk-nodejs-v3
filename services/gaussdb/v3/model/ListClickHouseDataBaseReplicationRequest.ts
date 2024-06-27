

export class ListClickHouseDataBaseReplicationRequest {
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'X-Language'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListClickHouseDataBaseReplicationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListClickHouseDataBaseReplicationRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClickHouseDataBaseReplicationRequest {
        this['offset'] = offset;
        return this;
    }
    public withXLanguage(xLanguage: string): ListClickHouseDataBaseReplicationRequest {
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