

export class ListCodeSegmentsRequest {
    private 'workspace_id'?: string;
    private 'code_segment_id'?: string;
    private 'code_segment_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCodeSegmentsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCodeSegmentId(codeSegmentId: string): ListCodeSegmentsRequest {
        this['code_segment_id'] = codeSegmentId;
        return this;
    }
    public set codeSegmentId(codeSegmentId: string  | undefined) {
        this['code_segment_id'] = codeSegmentId;
    }
    public get codeSegmentId(): string | undefined {
        return this['code_segment_id'];
    }
    public withCodeSegmentName(codeSegmentName: string): ListCodeSegmentsRequest {
        this['code_segment_name'] = codeSegmentName;
        return this;
    }
    public set codeSegmentName(codeSegmentName: string  | undefined) {
        this['code_segment_name'] = codeSegmentName;
    }
    public get codeSegmentName(): string | undefined {
        return this['code_segment_name'];
    }
    public withOffset(offset: number): ListCodeSegmentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCodeSegmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCodeSegmentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListCodeSegmentsRequest {
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