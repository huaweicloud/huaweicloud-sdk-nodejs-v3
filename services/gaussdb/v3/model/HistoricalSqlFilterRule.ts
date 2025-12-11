

export class HistoricalSqlFilterRule {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public pattern?: string;
    private 'sql_type'?: string;
    private 'max_concurrency'?: number;
    private 'create_at'?: number;
    private 'expire_at'?: number;
    private 'delete_at'?: number;
    public constructor(instanceId?: string, nodeId?: string, pattern?: string, sqlType?: string, maxConcurrency?: number, createAt?: number, expireAt?: number, deleteAt?: number) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['pattern'] = pattern;
        this['sql_type'] = sqlType;
        this['max_concurrency'] = maxConcurrency;
        this['create_at'] = createAt;
        this['expire_at'] = expireAt;
        this['delete_at'] = deleteAt;
    }
    public withInstanceId(instanceId: string): HistoricalSqlFilterRule {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): HistoricalSqlFilterRule {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withPattern(pattern: string): HistoricalSqlFilterRule {
        this['pattern'] = pattern;
        return this;
    }
    public withSqlType(sqlType: string): HistoricalSqlFilterRule {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withMaxConcurrency(maxConcurrency: number): HistoricalSqlFilterRule {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withCreateAt(createAt: number): HistoricalSqlFilterRule {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withExpireAt(expireAt: number): HistoricalSqlFilterRule {
        this['expire_at'] = expireAt;
        return this;
    }
    public set expireAt(expireAt: number  | undefined) {
        this['expire_at'] = expireAt;
    }
    public get expireAt(): number | undefined {
        return this['expire_at'];
    }
    public withDeleteAt(deleteAt: number): HistoricalSqlFilterRule {
        this['delete_at'] = deleteAt;
        return this;
    }
    public set deleteAt(deleteAt: number  | undefined) {
        this['delete_at'] = deleteAt;
    }
    public get deleteAt(): number | undefined {
        return this['delete_at'];
    }
}