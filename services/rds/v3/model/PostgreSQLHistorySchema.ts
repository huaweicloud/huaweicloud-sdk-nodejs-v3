import { PostgreSQLHistoryTable } from './PostgreSQLHistoryTable';


export class PostgreSQLHistorySchema {
    public name?: string;
    private 'total_tables'?: number;
    public tables?: Array<PostgreSQLHistoryTable>;
    public constructor() { 
    }
    public withName(name: string): PostgreSQLHistorySchema {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): PostgreSQLHistorySchema {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withTables(tables: Array<PostgreSQLHistoryTable>): PostgreSQLHistorySchema {
        this['tables'] = tables;
        return this;
    }
}