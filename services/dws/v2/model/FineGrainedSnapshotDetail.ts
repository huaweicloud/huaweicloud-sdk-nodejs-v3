

export class FineGrainedSnapshotDetail {
    public database?: string;
    private 'schema_list'?: Array<string> | undefined;
    private 'table_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withDatabase(database: string): FineGrainedSnapshotDetail {
        this['database'] = database;
        return this;
    }
    public withSchemaList(schemaList: Array<string>): FineGrainedSnapshotDetail {
        this['schema_list'] = schemaList;
        return this;
    }
    public set schemaList(schemaList: Array<string> | undefined) {
        this['schema_list'] = schemaList;
    }
    public get schemaList() {
        return this['schema_list'];
    }
    public withTableList(tableList: Array<string>): FineGrainedSnapshotDetail {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<string> | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList() {
        return this['table_list'];
    }
}