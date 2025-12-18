import { DatabaseTable } from './DatabaseTable';


export class NoSqlCreateBackupRequestBody {
    public name?: string;
    public description?: string;
    private 'database_tables'?: Array<DatabaseTable>;
    public constructor(name?: string, description?: string) { 
        this['name'] = name;
        this['description'] = description;
    }
    public withName(name: string): NoSqlCreateBackupRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NoSqlCreateBackupRequestBody {
        this['description'] = description;
        return this;
    }
    public withDatabaseTables(databaseTables: Array<DatabaseTable>): NoSqlCreateBackupRequestBody {
        this['database_tables'] = databaseTables;
        return this;
    }
    public set databaseTables(databaseTables: Array<DatabaseTable>  | undefined) {
        this['database_tables'] = databaseTables;
    }
    public get databaseTables(): Array<DatabaseTable> | undefined {
        return this['database_tables'];
    }
}