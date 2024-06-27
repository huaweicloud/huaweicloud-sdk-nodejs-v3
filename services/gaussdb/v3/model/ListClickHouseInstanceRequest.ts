

export class ListClickHouseInstanceRequest {
    private 'instance_id'?: string;
    private 'clickhouse_instance_id'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, clickhouseInstanceId?: string) { 
        this['instance_id'] = instanceId;
        this['clickhouse_instance_id'] = clickhouseInstanceId;
    }
    public withInstanceId(instanceId: string): ListClickHouseInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withClickhouseInstanceId(clickhouseInstanceId: string): ListClickHouseInstanceRequest {
        this['clickhouse_instance_id'] = clickhouseInstanceId;
        return this;
    }
    public set clickhouseInstanceId(clickhouseInstanceId: string  | undefined) {
        this['clickhouse_instance_id'] = clickhouseInstanceId;
    }
    public get clickhouseInstanceId(): string | undefined {
        return this['clickhouse_instance_id'];
    }
    public withXLanguage(xLanguage: string): ListClickHouseInstanceRequest {
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