import { RestoreTableInfo } from './RestoreTableInfo';


export class RestoreDatabasesInfo {
    public database?: string;
    public tables?: Array<RestoreTableInfo>;
    public constructor(database?: string, tables?: Array<RestoreTableInfo>) { 
        this['database'] = database;
        this['tables'] = tables;
    }
    public withDatabase(database: string): RestoreDatabasesInfo {
        this['database'] = database;
        return this;
    }
    public withTables(tables: Array<RestoreTableInfo>): RestoreDatabasesInfo {
        this['tables'] = tables;
        return this;
    }
}