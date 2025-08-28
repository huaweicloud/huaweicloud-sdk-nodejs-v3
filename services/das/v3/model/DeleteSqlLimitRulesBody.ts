

export class DeleteSqlLimitRulesBody {
    private 'datastore_type'?: DeleteSqlLimitRulesBodyDatastoreTypeEnum | string;
    private 'sql_limit_rule_ids'?: Array<string>;
    private 'database_name'?: string;
    public constructor(datastoreType?: string, sqlLimitRuleIds?: Array<string>) { 
        this['datastore_type'] = datastoreType;
        this['sql_limit_rule_ids'] = sqlLimitRuleIds;
    }
    public withDatastoreType(datastoreType: DeleteSqlLimitRulesBodyDatastoreTypeEnum | string): DeleteSqlLimitRulesBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: DeleteSqlLimitRulesBodyDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): DeleteSqlLimitRulesBodyDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withSqlLimitRuleIds(sqlLimitRuleIds: Array<string>): DeleteSqlLimitRulesBody {
        this['sql_limit_rule_ids'] = sqlLimitRuleIds;
        return this;
    }
    public set sqlLimitRuleIds(sqlLimitRuleIds: Array<string>  | undefined) {
        this['sql_limit_rule_ids'] = sqlLimitRuleIds;
    }
    public get sqlLimitRuleIds(): Array<string> | undefined {
        return this['sql_limit_rule_ids'];
    }
    public withDatabaseName(databaseName: string): DeleteSqlLimitRulesBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSqlLimitRulesBodyDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL'
}
