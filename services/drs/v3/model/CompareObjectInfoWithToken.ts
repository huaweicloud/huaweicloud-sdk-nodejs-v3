import { CompareTableInfoWithToken } from './CompareTableInfoWithToken';


export class CompareObjectInfoWithToken {
    private 'db_name'?: string;
    private 'table_name_with_token'?: Array<CompareTableInfoWithToken>;
    public constructor(dbName?: string) { 
        this['db_name'] = dbName;
    }
    public withDbName(dbName: string): CompareObjectInfoWithToken {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableNameWithToken(tableNameWithToken: Array<CompareTableInfoWithToken>): CompareObjectInfoWithToken {
        this['table_name_with_token'] = tableNameWithToken;
        return this;
    }
    public set tableNameWithToken(tableNameWithToken: Array<CompareTableInfoWithToken>  | undefined) {
        this['table_name_with_token'] = tableNameWithToken;
    }
    public get tableNameWithToken(): Array<CompareTableInfoWithToken> | undefined {
        return this['table_name_with_token'];
    }
}