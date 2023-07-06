import { CompareTableInfoWithToken } from './CompareTableInfoWithToken';


export class CompareObjectInfoWithToken {
    private 'db_name': string | undefined;
    private 'table_name_with_token'?: Array<CompareTableInfoWithToken> | undefined;
    public constructor(dbName?: any) { 
        this['db_name'] = dbName;
    }
    public withDbName(dbName: string): CompareObjectInfoWithToken {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withTableNameWithToken(tableNameWithToken: Array<CompareTableInfoWithToken>): CompareObjectInfoWithToken {
        this['table_name_with_token'] = tableNameWithToken;
        return this;
    }
    public set tableNameWithToken(tableNameWithToken: Array<CompareTableInfoWithToken> | undefined) {
        this['table_name_with_token'] = tableNameWithToken;
    }
    public get tableNameWithToken() {
        return this['table_name_with_token'];
    }
}