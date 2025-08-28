

export class SqlLimitRule {
    public id?: string;
    private 'sql_type'?: string;
    public pattern?: string;
    private 'max_concurrency'?: number;
    private 'max_waiting'?: number;
    public constructor(id?: string, sqlType?: string, pattern?: string, maxConcurrency?: number) { 
        this['id'] = id;
        this['sql_type'] = sqlType;
        this['pattern'] = pattern;
        this['max_concurrency'] = maxConcurrency;
    }
    public withId(id: string): SqlLimitRule {
        this['id'] = id;
        return this;
    }
    public withSqlType(sqlType: string): SqlLimitRule {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withPattern(pattern: string): SqlLimitRule {
        this['pattern'] = pattern;
        return this;
    }
    public withMaxConcurrency(maxConcurrency: number): SqlLimitRule {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withMaxWaiting(maxWaiting: number): SqlLimitRule {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
}