import { PostgreSQLHistoryDatabaseInfo } from './PostgreSQLHistoryDatabaseInfo';


export class PostgreSQLHistoryDatabaseInstance {
    public id?: string;
    public name?: string;
    private 'total_tables'?: number;
    public databases?: Array<PostgreSQLHistoryDatabaseInfo>;
    public constructor() { 
    }
    public withId(id: string): PostgreSQLHistoryDatabaseInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PostgreSQLHistoryDatabaseInstance {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): PostgreSQLHistoryDatabaseInstance {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withDatabases(databases: Array<PostgreSQLHistoryDatabaseInfo>): PostgreSQLHistoryDatabaseInstance {
        this['databases'] = databases;
        return this;
    }
}