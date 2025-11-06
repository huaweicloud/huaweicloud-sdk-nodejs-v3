

export class ExtFineGrainedSnapshotDetail {
    public database?: string;
    private 'schema_list'?: Array<string>;
    private 'table_list'?: Array<string>;
    public constructor() { 
    }
    public withDatabase(database: string): ExtFineGrainedSnapshotDetail {
        this['database'] = database;
        return this;
    }
    public withSchemaList(schemaList: Array<string>): ExtFineGrainedSnapshotDetail {
        this['schema_list'] = schemaList;
        return this;
    }
    public set schemaList(schemaList: Array<string>  | undefined) {
        this['schema_list'] = schemaList;
    }
    public get schemaList(): Array<string> | undefined {
        return this['schema_list'];
    }
    public withTableList(tableList: Array<string>): ExtFineGrainedSnapshotDetail {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<string>  | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList(): Array<string> | undefined {
        return this['table_list'];
    }
}