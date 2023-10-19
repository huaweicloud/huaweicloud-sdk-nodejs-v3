import { CreateRestoreTableInfo } from './CreateRestoreTableInfo';


export class CreateRestoreDatabaseTableInfo {
    public database?: string;
    public tables?: Array<CreateRestoreTableInfo>;
    public constructor(database?: string, tables?: Array<CreateRestoreTableInfo>) { 
        this['database'] = database;
        this['tables'] = tables;
    }
    public withDatabase(database: string): CreateRestoreDatabaseTableInfo {
        this['database'] = database;
        return this;
    }
    public withTables(tables: Array<CreateRestoreTableInfo>): CreateRestoreDatabaseTableInfo {
        this['tables'] = tables;
        return this;
    }
}