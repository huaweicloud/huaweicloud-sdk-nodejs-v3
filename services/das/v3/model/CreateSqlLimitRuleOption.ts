

export class CreateSqlLimitRuleOption {
    private 'sql_type'?: CreateSqlLimitRuleOptionSqlTypeEnum | string;
    private 'max_concurrency'?: number;
    private 'max_waiting'?: number;
    public pattern?: string;
    private 'his_sql_limit_switch'?: boolean;
    public constructor(sqlType?: string, maxConcurrency?: number, pattern?: string) { 
        this['sql_type'] = sqlType;
        this['max_concurrency'] = maxConcurrency;
        this['pattern'] = pattern;
    }
    public withSqlType(sqlType: CreateSqlLimitRuleOptionSqlTypeEnum | string): CreateSqlLimitRuleOption {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: CreateSqlLimitRuleOptionSqlTypeEnum | string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): CreateSqlLimitRuleOptionSqlTypeEnum | string | undefined {
        return this['sql_type'];
    }
    public withMaxConcurrency(maxConcurrency: number): CreateSqlLimitRuleOption {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withMaxWaiting(maxWaiting: number): CreateSqlLimitRuleOption {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
    public withPattern(pattern: string): CreateSqlLimitRuleOption {
        this['pattern'] = pattern;
        return this;
    }
    public withHisSqlLimitSwitch(hisSqlLimitSwitch: boolean): CreateSqlLimitRuleOption {
        this['his_sql_limit_switch'] = hisSqlLimitSwitch;
        return this;
    }
    public set hisSqlLimitSwitch(hisSqlLimitSwitch: boolean  | undefined) {
        this['his_sql_limit_switch'] = hisSqlLimitSwitch;
    }
    public get hisSqlLimitSwitch(): boolean | undefined {
        return this['his_sql_limit_switch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlLimitRuleOptionSqlTypeEnum {
    SELECT = 'SELECT',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    INSERT = 'INSERT',
    QUERY_ID = 'QUERY_ID',
    QUERY_STR = 'QUERY_STR'
}
