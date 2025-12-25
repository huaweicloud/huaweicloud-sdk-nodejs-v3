

export class ShowRetrieveScriptRequest {
    private 'workspace_id'?: string;
    private 'retrieve_script_id'?: string;
    public constructor(workspaceId?: string, retrieveScriptId?: string) { 
        this['workspace_id'] = workspaceId;
        this['retrieve_script_id'] = retrieveScriptId;
    }
    public withWorkspaceId(workspaceId: string): ShowRetrieveScriptRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRetrieveScriptId(retrieveScriptId: string): ShowRetrieveScriptRequest {
        this['retrieve_script_id'] = retrieveScriptId;
        return this;
    }
    public set retrieveScriptId(retrieveScriptId: string  | undefined) {
        this['retrieve_script_id'] = retrieveScriptId;
    }
    public get retrieveScriptId(): string | undefined {
        return this['retrieve_script_id'];
    }
}