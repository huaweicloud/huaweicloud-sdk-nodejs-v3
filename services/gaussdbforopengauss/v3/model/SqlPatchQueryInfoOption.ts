

export class SqlPatchQueryInfoOption {
    private 'sql_id'?: string;
    private 'sql_text'?: string;
    private 'patch_name'?: string;
    private 'node_id'?: string;
    public enabled?: boolean;
    private 'abort_patch'?: boolean;
    public constructor() { 
    }
    public withSqlId(sqlId: string): SqlPatchQueryInfoOption {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlText(sqlText: string): SqlPatchQueryInfoOption {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withPatchName(patchName: string): SqlPatchQueryInfoOption {
        this['patch_name'] = patchName;
        return this;
    }
    public set patchName(patchName: string  | undefined) {
        this['patch_name'] = patchName;
    }
    public get patchName(): string | undefined {
        return this['patch_name'];
    }
    public withNodeId(nodeId: string): SqlPatchQueryInfoOption {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withEnabled(enabled: boolean): SqlPatchQueryInfoOption {
        this['enabled'] = enabled;
        return this;
    }
    public withAbortPatch(abortPatch: boolean): SqlPatchQueryInfoOption {
        this['abort_patch'] = abortPatch;
        return this;
    }
    public set abortPatch(abortPatch: boolean  | undefined) {
        this['abort_patch'] = abortPatch;
    }
    public get abortPatch(): boolean | undefined {
        return this['abort_patch'];
    }
}