

export class HealthReportTableSpaceInfo {
    public database?: string;
    public table?: string;
    private 'db_engine'?: string;
    private 'table_size'?: number;
    private 'data_size'?: number;
    private 'index_size'?: number;
    public rows?: number;
    public constructor(database?: string, table?: string, dbEngine?: string, tableSize?: number, dataSize?: number, indexSize?: number, rows?: number) { 
        this['database'] = database;
        this['table'] = table;
        this['db_engine'] = dbEngine;
        this['table_size'] = tableSize;
        this['data_size'] = dataSize;
        this['index_size'] = indexSize;
        this['rows'] = rows;
    }
    public withDatabase(database: string): HealthReportTableSpaceInfo {
        this['database'] = database;
        return this;
    }
    public withTable(table: string): HealthReportTableSpaceInfo {
        this['table'] = table;
        return this;
    }
    public withDbEngine(dbEngine: string): HealthReportTableSpaceInfo {
        this['db_engine'] = dbEngine;
        return this;
    }
    public set dbEngine(dbEngine: string  | undefined) {
        this['db_engine'] = dbEngine;
    }
    public get dbEngine(): string | undefined {
        return this['db_engine'];
    }
    public withTableSize(tableSize: number): HealthReportTableSpaceInfo {
        this['table_size'] = tableSize;
        return this;
    }
    public set tableSize(tableSize: number  | undefined) {
        this['table_size'] = tableSize;
    }
    public get tableSize(): number | undefined {
        return this['table_size'];
    }
    public withDataSize(dataSize: number): HealthReportTableSpaceInfo {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
    public withIndexSize(indexSize: number): HealthReportTableSpaceInfo {
        this['index_size'] = indexSize;
        return this;
    }
    public set indexSize(indexSize: number  | undefined) {
        this['index_size'] = indexSize;
    }
    public get indexSize(): number | undefined {
        return this['index_size'];
    }
    public withRows(rows: number): HealthReportTableSpaceInfo {
        this['rows'] = rows;
        return this;
    }
}