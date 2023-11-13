import { PostgreSQLHistoryDatabase } from './PostgreSQLHistoryDatabase';


export class PostgreSQLHistoryTableInstance {
    public id?: string;
    public name?: string;
    private 'total_tables'?: number;
    public databases?: Array<PostgreSQLHistoryDatabase>;
    public constructor() { 
    }
    public withId(id: string): PostgreSQLHistoryTableInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PostgreSQLHistoryTableInstance {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): PostgreSQLHistoryTableInstance {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withDatabases(databases: Array<PostgreSQLHistoryDatabase>): PostgreSQLHistoryTableInstance {
        this['databases'] = databases;
        return this;
    }
}