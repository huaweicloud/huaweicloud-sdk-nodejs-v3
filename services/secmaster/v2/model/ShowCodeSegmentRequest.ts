

export class ShowCodeSegmentRequest {
    private 'workspace_id'?: string;
    private 'code_segment_id'?: string;
    public constructor(workspaceId?: string, codeSegmentId?: string) { 
        this['workspace_id'] = workspaceId;
        this['code_segment_id'] = codeSegmentId;
    }
    public withWorkspaceId(workspaceId: string): ShowCodeSegmentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCodeSegmentId(codeSegmentId: string): ShowCodeSegmentRequest {
        this['code_segment_id'] = codeSegmentId;
        return this;
    }
    public set codeSegmentId(codeSegmentId: string  | undefined) {
        this['code_segment_id'] = codeSegmentId;
    }
    public get codeSegmentId(): string | undefined {
        return this['code_segment_id'];
    }
}