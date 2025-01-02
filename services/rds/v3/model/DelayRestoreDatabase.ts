import { DelayRestoreSchema } from './DelayRestoreSchema';


export class DelayRestoreDatabase {
    public name?: string;
    private 'total_tables'?: number;
    public schemas?: Array<DelayRestoreSchema>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DelayRestoreDatabase {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): DelayRestoreDatabase {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withSchemas(schemas: Array<DelayRestoreSchema>): DelayRestoreDatabase {
        this['schemas'] = schemas;
        return this;
    }
}