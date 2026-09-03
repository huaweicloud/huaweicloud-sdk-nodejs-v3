

export class ShowExecutionPlanRequestBody {
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'sql_script'?: string;
    private 'node_id'?: string;
    private 'node_type'?: string;
    private 'use_default_search_path'?: boolean;
    private 'ignore_limit'?: boolean;
    public perpage?: number;
    public curpage?: number;
    public constructor(databaseName?: string, sqlScript?: string, perpage?: number, curpage?: number) { 
        this['database_name'] = databaseName;
        this['sql_script'] = sqlScript;
        this['perpage'] = perpage;
        this['curpage'] = curpage;
    }
    public withDatabaseName(databaseName: string): ShowExecutionPlanRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ShowExecutionPlanRequestBody {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withSqlScript(sqlScript: string): ShowExecutionPlanRequestBody {
        this['sql_script'] = sqlScript;
        return this;
    }
    public set sqlScript(sqlScript: string  | undefined) {
        this['sql_script'] = sqlScript;
    }
    public get sqlScript(): string | undefined {
        return this['sql_script'];
    }
    public withNodeId(nodeId: string): ShowExecutionPlanRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeType(nodeType: string): ShowExecutionPlanRequestBody {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withUseDefaultSearchPath(useDefaultSearchPath: boolean): ShowExecutionPlanRequestBody {
        this['use_default_search_path'] = useDefaultSearchPath;
        return this;
    }
    public set useDefaultSearchPath(useDefaultSearchPath: boolean  | undefined) {
        this['use_default_search_path'] = useDefaultSearchPath;
    }
    public get useDefaultSearchPath(): boolean | undefined {
        return this['use_default_search_path'];
    }
    public withIgnoreLimit(ignoreLimit: boolean): ShowExecutionPlanRequestBody {
        this['ignore_limit'] = ignoreLimit;
        return this;
    }
    public set ignoreLimit(ignoreLimit: boolean  | undefined) {
        this['ignore_limit'] = ignoreLimit;
    }
    public get ignoreLimit(): boolean | undefined {
        return this['ignore_limit'];
    }
    public withPerpage(perpage: number): ShowExecutionPlanRequestBody {
        this['perpage'] = perpage;
        return this;
    }
    public withCurpage(curpage: number): ShowExecutionPlanRequestBody {
        this['curpage'] = curpage;
        return this;
    }
}