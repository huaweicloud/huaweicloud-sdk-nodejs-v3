import { UpdateRetrieveScriptRequestBody } from './UpdateRetrieveScriptRequestBody';


export class UpdateRetrieveScriptRequest {
    private 'workspace_id'?: string;
    private 'retrieve_script_id'?: string;
    public body?: UpdateRetrieveScriptRequestBody;
    public constructor(workspaceId?: string, retrieveScriptId?: string) { 
        this['workspace_id'] = workspaceId;
        this['retrieve_script_id'] = retrieveScriptId;
    }
    public withWorkspaceId(workspaceId: string): UpdateRetrieveScriptRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRetrieveScriptId(retrieveScriptId: string): UpdateRetrieveScriptRequest {
        this['retrieve_script_id'] = retrieveScriptId;
        return this;
    }
    public set retrieveScriptId(retrieveScriptId: string  | undefined) {
        this['retrieve_script_id'] = retrieveScriptId;
    }
    public get retrieveScriptId(): string | undefined {
        return this['retrieve_script_id'];
    }
    public withBody(body: UpdateRetrieveScriptRequestBody): UpdateRetrieveScriptRequest {
        this['body'] = body;
        return this;
    }
}