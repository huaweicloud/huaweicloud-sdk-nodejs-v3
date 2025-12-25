import { ImportPlaybookRequestBody } from './ImportPlaybookRequestBody';


export class ImportPlaybookRequest {
    private 'workspace_id'?: string;
    public body?: ImportPlaybookRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ImportPlaybookRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ImportPlaybookRequestBody): ImportPlaybookRequest {
        this['body'] = body;
        return this;
    }
}