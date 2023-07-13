

export class CompareObjectInfo {
    private 'db_name': string | undefined;
    private 'table_name'?: Array<string> | undefined;
    public constructor(dbName?: any) { 
        this['db_name'] = dbName;
    }
    public withDbName(dbName: string): CompareObjectInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withTableName(tableName: Array<string>): CompareObjectInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: Array<string> | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName() {
        return this['table_name'];
    }
}