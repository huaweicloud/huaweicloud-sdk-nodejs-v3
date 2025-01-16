

export class ShowDataPreviewRequest {
    public workspace?: string;
    public guid?: string;
    private 'data_connection_id'?: string;
    private 'data_type'?: string;
    public database?: string;
    public schema?: string;
    public table?: string;
    private 'datasource_workspace_id'?: string;
    private 'partitions_condition'?: string;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): ShowDataPreviewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): ShowDataPreviewRequest {
        this['guid'] = guid;
        return this;
    }
    public withDataConnectionId(dataConnectionId: string): ShowDataPreviewRequest {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withDataType(dataType: string): ShowDataPreviewRequest {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDatabase(database: string): ShowDataPreviewRequest {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ShowDataPreviewRequest {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ShowDataPreviewRequest {
        this['table'] = table;
        return this;
    }
    public withDatasourceWorkspaceId(datasourceWorkspaceId: string): ShowDataPreviewRequest {
        this['datasource_workspace_id'] = datasourceWorkspaceId;
        return this;
    }
    public set datasourceWorkspaceId(datasourceWorkspaceId: string  | undefined) {
        this['datasource_workspace_id'] = datasourceWorkspaceId;
    }
    public get datasourceWorkspaceId(): string | undefined {
        return this['datasource_workspace_id'];
    }
    public withPartitionsCondition(partitionsCondition: string): ShowDataPreviewRequest {
        this['partitions_condition'] = partitionsCondition;
        return this;
    }
    public set partitionsCondition(partitionsCondition: string  | undefined) {
        this['partitions_condition'] = partitionsCondition;
    }
    public get partitionsCondition(): string | undefined {
        return this['partitions_condition'];
    }
}