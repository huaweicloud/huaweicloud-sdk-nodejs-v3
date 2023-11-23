import { RestoreDatabaseTableInfo } from './RestoreDatabaseTableInfo';


export class RestoreDatabaseInfos {
    public name?: string;
    private 'total_tables'?: number;
    public tables?: Array<RestoreDatabaseTableInfo>;
    public constructor() { 
    }
    public withName(name: string): RestoreDatabaseInfos {
        this['name'] = name;
        return this;
    }
    public withTotalTables(totalTables: number): RestoreDatabaseInfos {
        this['total_tables'] = totalTables;
        return this;
    }
    public set totalTables(totalTables: number  | undefined) {
        this['total_tables'] = totalTables;
    }
    public get totalTables(): number | undefined {
        return this['total_tables'];
    }
    public withTables(tables: Array<RestoreDatabaseTableInfo>): RestoreDatabaseInfos {
        this['tables'] = tables;
        return this;
    }
}