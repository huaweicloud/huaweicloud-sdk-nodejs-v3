import { UpdateSqlLimitRuleOption } from './UpdateSqlLimitRuleOption';


export class UpdateSqlLimitRulesBody {
    private 'datastore_type'?: UpdateSqlLimitRulesBodyDatastoreTypeEnum | string;
    private 'sql_limit_rule_ids'?: Array<string>;
    private 'database_name'?: string;
    private 'sql_limit_rule'?: UpdateSqlLimitRuleOption;
    public constructor(datastoreType?: string, sqlLimitRuleIds?: Array<string>, sqlLimitRule?: UpdateSqlLimitRuleOption) { 
        this['datastore_type'] = datastoreType;
        this['sql_limit_rule_ids'] = sqlLimitRuleIds;
        this['sql_limit_rule'] = sqlLimitRule;
    }
    public withDatastoreType(datastoreType: UpdateSqlLimitRulesBodyDatastoreTypeEnum | string): UpdateSqlLimitRulesBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: UpdateSqlLimitRulesBodyDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): UpdateSqlLimitRulesBodyDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withSqlLimitRuleIds(sqlLimitRuleIds: Array<string>): UpdateSqlLimitRulesBody {
        this['sql_limit_rule_ids'] = sqlLimitRuleIds;
        return this;
    }
    public set sqlLimitRuleIds(sqlLimitRuleIds: Array<string>  | undefined) {
        this['sql_limit_rule_ids'] = sqlLimitRuleIds;
    }
    public get sqlLimitRuleIds(): Array<string> | undefined {
        return this['sql_limit_rule_ids'];
    }
    public withDatabaseName(databaseName: string): UpdateSqlLimitRulesBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSqlLimitRule(sqlLimitRule: UpdateSqlLimitRuleOption): UpdateSqlLimitRulesBody {
        this['sql_limit_rule'] = sqlLimitRule;
        return this;
    }
    public set sqlLimitRule(sqlLimitRule: UpdateSqlLimitRuleOption  | undefined) {
        this['sql_limit_rule'] = sqlLimitRule;
    }
    public get sqlLimitRule(): UpdateSqlLimitRuleOption | undefined {
        return this['sql_limit_rule'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlLimitRulesBodyDatastoreTypeEnum {
    POSTGRESQL = 'PostgreSQL'
}
