import { UpdateCodeSegmentRequestBody } from './UpdateCodeSegmentRequestBody';


export class UpdateCodeSegmentRequest {
    private 'workspace_id'?: string;
    private 'code_segment_id'?: string;
    public body?: UpdateCodeSegmentRequestBody;
    public constructor(workspaceId?: string, codeSegmentId?: string) { 
        this['workspace_id'] = workspaceId;
        this['code_segment_id'] = codeSegmentId;
    }
    public withWorkspaceId(workspaceId: string): UpdateCodeSegmentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCodeSegmentId(codeSegmentId: string): UpdateCodeSegmentRequest {
        this['code_segment_id'] = codeSegmentId;
        return this;
    }
    public set codeSegmentId(codeSegmentId: string  | undefined) {
        this['code_segment_id'] = codeSegmentId;
    }
    public get codeSegmentId(): string | undefined {
        return this['code_segment_id'];
    }
    public withBody(body: UpdateCodeSegmentRequestBody): UpdateCodeSegmentRequest {
        this['body'] = body;
        return this;
    }
}