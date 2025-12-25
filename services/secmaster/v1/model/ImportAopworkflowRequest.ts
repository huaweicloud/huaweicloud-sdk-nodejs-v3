import { ImportAopworkflowRequestBody } from './ImportAopworkflowRequestBody';


export class ImportAopworkflowRequest {
    private 'workspace_id'?: string;
    public body?: ImportAopworkflowRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ImportAopworkflowRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ImportAopworkflowRequestBody): ImportAopworkflowRequest {
        this['body'] = body;
        return this;
    }
}