

export class IndexAdviceInfo {
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'index_name'?: string;
    public columns?: Array<string>;
    public unique?: boolean;
    private 'track_id'?: string;
    public quality?: object;
    private 'ddl_add_index'?: string;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): IndexAdviceInfo {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): IndexAdviceInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withIndexName(indexName: string): IndexAdviceInfo {
        this['index_name'] = indexName;
        return this;
    }
    public set indexName(indexName: string  | undefined) {
        this['index_name'] = indexName;
    }
    public get indexName(): string | undefined {
        return this['index_name'];
    }
    public withColumns(columns: Array<string>): IndexAdviceInfo {
        this['columns'] = columns;
        return this;
    }
    public withUnique(unique: boolean): IndexAdviceInfo {
        this['unique'] = unique;
        return this;
    }
    public withTrackId(trackId: string): IndexAdviceInfo {
        this['track_id'] = trackId;
        return this;
    }
    public set trackId(trackId: string  | undefined) {
        this['track_id'] = trackId;
    }
    public get trackId(): string | undefined {
        return this['track_id'];
    }
    public withQuality(quality: object): IndexAdviceInfo {
        this['quality'] = quality;
        return this;
    }
    public withDdlAddIndex(ddlAddIndex: string): IndexAdviceInfo {
        this['ddl_add_index'] = ddlAddIndex;
        return this;
    }
    public set ddlAddIndex(ddlAddIndex: string  | undefined) {
        this['ddl_add_index'] = ddlAddIndex;
    }
    public get ddlAddIndex(): string | undefined {
        return this['ddl_add_index'];
    }
}