import { RestoreTableInfoNew } from './RestoreTableInfoNew';


export class RestoreDatabasesInfoNew {
    public database?: string;
    public tables?: Array<RestoreTableInfoNew>;
    public constructor(database?: string, tables?: Array<RestoreTableInfoNew>) { 
        this['database'] = database;
        this['tables'] = tables;
    }
    public withDatabase(database: string): RestoreDatabasesInfoNew {
        this['database'] = database;
        return this;
    }
    public withTables(tables: Array<RestoreTableInfoNew>): RestoreDatabasesInfoNew {
        this['tables'] = tables;
        return this;
    }
}