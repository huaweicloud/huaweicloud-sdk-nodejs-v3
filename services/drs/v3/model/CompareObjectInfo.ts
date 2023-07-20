

export class CompareObjectInfo {
    private 'db_name'?: string;
    private 'table_name'?: Array<string>;
    public constructor(dbName?: string) { 
        this['db_name'] = dbName;
    }
    public withDbName(dbName: string): CompareObjectInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: Array<string>): CompareObjectInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: Array<string>  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): Array<string> | undefined {
        return this['table_name'];
    }
}