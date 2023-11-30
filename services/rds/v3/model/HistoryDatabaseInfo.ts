

export class HistoryDatabaseInfo {
    public name?: string;
    private 'total_tables'?: number;
    public constructor() { 
    }
    public withName(name: string): HistoryDatabaseInfo {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): HistoryDatabaseInfo {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
}