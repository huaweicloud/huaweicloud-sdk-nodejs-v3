import { DelayRestoreTable } from './DelayRestoreTable';


export class DelayRestoreSchema {
    public name?: string;
    private 'total_tables'?: number;
    public tables?: Array<DelayRestoreTable>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DelayRestoreSchema {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): DelayRestoreSchema {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withTables(tables: Array<DelayRestoreTable>): DelayRestoreSchema {
        this['tables'] = tables;
        return this;
    }
}