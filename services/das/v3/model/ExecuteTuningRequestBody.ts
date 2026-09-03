

export class ExecuteTuningRequestBody {
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'sql_script'?: string;
    private 'node_type'?: string;
    private 'node_id'?: string;
    private 'use_default_search_path'?: boolean;
    public constructor(databaseName?: string, sqlScript?: string) { 
        this['database_name'] = databaseName;
        this['sql_script'] = sqlScript;
    }
    public withDatabaseName(databaseName: string): ExecuteTuningRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ExecuteTuningRequestBody {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withSqlScript(sqlScript: string): ExecuteTuningRequestBody {
        this['sql_script'] = sqlScript;
        return this;
    }
    public set sqlScript(sqlScript: string  | undefined) {
        this['sql_script'] = sqlScript;
    }
    public get sqlScript(): string | undefined {
        return this['sql_script'];
    }
    public withNodeType(nodeType: string): ExecuteTuningRequestBody {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNodeId(nodeId: string): ExecuteTuningRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withUseDefaultSearchPath(useDefaultSearchPath: boolean): ExecuteTuningRequestBody {
        this['use_default_search_path'] = useDefaultSearchPath;
        return this;
    }
    public set useDefaultSearchPath(useDefaultSearchPath: boolean  | undefined) {
        this['use_default_search_path'] = useDefaultSearchPath;
    }
    public get useDefaultSearchPath(): boolean | undefined {
        return this['use_default_search_path'];
    }
}