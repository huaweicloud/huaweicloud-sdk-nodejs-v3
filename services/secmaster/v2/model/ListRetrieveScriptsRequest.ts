

export class ListRetrieveScriptsRequest {
    private 'workspace_id'?: string;
    private 'table_id'?: string;
    private 'script_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListRetrieveScriptsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableId(tableId: string): ListRetrieveScriptsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withScriptName(scriptName: string): ListRetrieveScriptsRequest {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withOffset(offset: number): ListRetrieveScriptsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRetrieveScriptsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListRetrieveScriptsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListRetrieveScriptsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}