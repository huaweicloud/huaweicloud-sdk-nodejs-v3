

export class ParseSqlLimitRulesReq {
    private 'datastore_type'?: ParseSqlLimitRulesReqDatastoreTypeEnum | string;
    private 'original_sql'?: string;
    private 'use_template'?: boolean;
    private 'keep_operators'?: boolean;
    public constructor(datastoreType?: string, originalSql?: string, useTemplate?: boolean, keepOperators?: boolean) { 
        this['datastore_type'] = datastoreType;
        this['original_sql'] = originalSql;
        this['use_template'] = useTemplate;
        this['keep_operators'] = keepOperators;
    }
    public withDatastoreType(datastoreType: ParseSqlLimitRulesReqDatastoreTypeEnum | string): ParseSqlLimitRulesReq {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ParseSqlLimitRulesReqDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ParseSqlLimitRulesReqDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withOriginalSql(originalSql: string): ParseSqlLimitRulesReq {
        this['original_sql'] = originalSql;
        return this;
    }
    public set originalSql(originalSql: string  | undefined) {
        this['original_sql'] = originalSql;
    }
    public get originalSql(): string | undefined {
        return this['original_sql'];
    }
    public withUseTemplate(useTemplate: boolean): ParseSqlLimitRulesReq {
        this['use_template'] = useTemplate;
        return this;
    }
    public set useTemplate(useTemplate: boolean  | undefined) {
        this['use_template'] = useTemplate;
    }
    public get useTemplate(): boolean | undefined {
        return this['use_template'];
    }
    public withKeepOperators(keepOperators: boolean): ParseSqlLimitRulesReq {
        this['keep_operators'] = keepOperators;
        return this;
    }
    public set keepOperators(keepOperators: boolean  | undefined) {
        this['keep_operators'] = keepOperators;
    }
    public get keepOperators(): boolean | undefined {
        return this['keep_operators'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ParseSqlLimitRulesReqDatastoreTypeEnum {
    MYSQL = 'MySQL',
    MARIADB = 'MariaDB',
    GAUSSDB_FOR_MYSQL = 'GaussDB(for MySQL)'
}
