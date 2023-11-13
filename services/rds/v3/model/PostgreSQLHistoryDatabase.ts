import { PostgreSQLHistorySchema } from './PostgreSQLHistorySchema';


export class PostgreSQLHistoryDatabase {
    public name?: string;
    private 'total_tables'?: number;
    public schemas?: Array<PostgreSQLHistorySchema>;
    public constructor() { 
    }
    public withName(name: string): PostgreSQLHistoryDatabase {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): PostgreSQLHistoryDatabase {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withSchemas(schemas: Array<PostgreSQLHistorySchema>): PostgreSQLHistoryDatabase {
        this['schemas'] = schemas;
        return this;
    }
}