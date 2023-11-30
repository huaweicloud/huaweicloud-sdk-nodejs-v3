import { HistoryDatabaseInfo } from './HistoryDatabaseInfo';


export class HistoryDatabaseInstance {
    public id?: string;
    public name?: string;
    private 'total_tables'?: number;
    public databases?: Array<HistoryDatabaseInfo>;
    public constructor() { 
    }
    public withId(id: string): HistoryDatabaseInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HistoryDatabaseInstance {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): HistoryDatabaseInstance {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withDatabases(databases: Array<HistoryDatabaseInfo>): HistoryDatabaseInstance {
        this['databases'] = databases;
        return this;
    }
}