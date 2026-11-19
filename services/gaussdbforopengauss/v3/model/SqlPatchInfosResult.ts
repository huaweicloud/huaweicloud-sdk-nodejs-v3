

export class SqlPatchInfosResult {
    private 'patch_name'?: string;
    private 'sql_id'?: string;
    public enabled?: boolean;
    private 'patch_status'?: SqlPatchInfosResultPatchStatusEnum | string;
    private 'abort_patch'?: boolean;
    public hint?: string;
    private 'sql_text'?: string;
    private 'node_id'?: string;
    public constructor() { 
    }
    public withPatchName(patchName: string): SqlPatchInfosResult {
        this['patch_name'] = patchName;
        return this;
    }
    public set patchName(patchName: string  | undefined) {
        this['patch_name'] = patchName;
    }
    public get patchName(): string | undefined {
        return this['patch_name'];
    }
    public withSqlId(sqlId: string): SqlPatchInfosResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withEnabled(enabled: boolean): SqlPatchInfosResult {
        this['enabled'] = enabled;
        return this;
    }
    public withPatchStatus(patchStatus: SqlPatchInfosResultPatchStatusEnum | string): SqlPatchInfosResult {
        this['patch_status'] = patchStatus;
        return this;
    }
    public set patchStatus(patchStatus: SqlPatchInfosResultPatchStatusEnum | string  | undefined) {
        this['patch_status'] = patchStatus;
    }
    public get patchStatus(): SqlPatchInfosResultPatchStatusEnum | string | undefined {
        return this['patch_status'];
    }
    public withAbortPatch(abortPatch: boolean): SqlPatchInfosResult {
        this['abort_patch'] = abortPatch;
        return this;
    }
    public set abortPatch(abortPatch: boolean  | undefined) {
        this['abort_patch'] = abortPatch;
    }
    public get abortPatch(): boolean | undefined {
        return this['abort_patch'];
    }
    public withHint(hint: string): SqlPatchInfosResult {
        this['hint'] = hint;
        return this;
    }
    public withSqlText(sqlText: string): SqlPatchInfosResult {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withNodeId(nodeId: string): SqlPatchInfosResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlPatchInfosResultPatchStatusEnum {
    D = 'd',
    H = 'h'
}
