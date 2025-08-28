import { CreateSqlLimitRuleOption } from './CreateSqlLimitRuleOption';


export class CreateSqlLimitRulesBody {
    private 'datastore_type'?: CreateSqlLimitRulesBodyDatastoreTypeEnum | string;
    private 'sql_limit_rules'?: Array<CreateSqlLimitRuleOption>;
    private 'database_name'?: string;
    public constructor(datastoreType?: string, sqlLimitRules?: Array<CreateSqlLimitRuleOption>) { 
        this['datastore_type'] = datastoreType;
        this['sql_limit_rules'] = sqlLimitRules;
    }
    public withDatastoreType(datastoreType: CreateSqlLimitRulesBodyDatastoreTypeEnum | string): CreateSqlLimitRulesBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: CreateSqlLimitRulesBodyDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): CreateSqlLimitRulesBodyDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withSqlLimitRules(sqlLimitRules: Array<CreateSqlLimitRuleOption>): CreateSqlLimitRulesBody {
        this['sql_limit_rules'] = sqlLimitRules;
        return this;
    }
    public set sqlLimitRules(sqlLimitRules: Array<CreateSqlLimitRuleOption>  | undefined) {
        this['sql_limit_rules'] = sqlLimitRules;
    }
    public get sqlLimitRules(): Array<CreateSqlLimitRuleOption> | undefined {
        return this['sql_limit_rules'];
    }
    public withDatabaseName(databaseName: string): CreateSqlLimitRulesBody {
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
export enum CreateSqlLimitRulesBodyDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL'
}
