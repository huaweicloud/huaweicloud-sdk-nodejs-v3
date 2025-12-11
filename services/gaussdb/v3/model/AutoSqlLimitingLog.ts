

export class AutoSqlLimitingLog {
    private 'node_id'?: string;
    public pattern?: string;
    private 'sql_type'?: string;
    private 'max_concurrency'?: number;
    private 'create_at'?: number;
    private 'expire_at'?: number;
    public constructor() { 
    }
    public withNodeId(nodeId: string): AutoSqlLimitingLog {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withPattern(pattern: string): AutoSqlLimitingLog {
        this['pattern'] = pattern;
        return this;
    }
    public withSqlType(sqlType: string): AutoSqlLimitingLog {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withMaxConcurrency(maxConcurrency: number): AutoSqlLimitingLog {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withCreateAt(createAt: number): AutoSqlLimitingLog {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withExpireAt(expireAt: number): AutoSqlLimitingLog {
        this['expire_at'] = expireAt;
        return this;
    }
    public set expireAt(expireAt: number  | undefined) {
        this['expire_at'] = expireAt;
    }
    public get expireAt(): number | undefined {
        return this['expire_at'];
    }
}