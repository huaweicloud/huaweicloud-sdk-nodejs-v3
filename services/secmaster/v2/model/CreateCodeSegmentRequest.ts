import { CreateCodeSegmentRequestBody } from './CreateCodeSegmentRequestBody';


export class CreateCodeSegmentRequest {
    private 'workspace_id'?: string;
    public body?: CreateCodeSegmentRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateCodeSegmentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateCodeSegmentRequestBody): CreateCodeSegmentRequest {
        this['body'] = body;
        return this;
    }
}