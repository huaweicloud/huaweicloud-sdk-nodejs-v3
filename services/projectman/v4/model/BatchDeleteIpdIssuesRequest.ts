

export class BatchDeleteIpdIssuesRequest {
    private 'project_id'?: string;
    private 'is_permanent_delete'?: boolean;
    private 'src_project_id'?: string;
    public body?: Array<string>;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteIpdIssuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsPermanentDelete(isPermanentDelete: boolean): BatchDeleteIpdIssuesRequest {
        this['is_permanent_delete'] = isPermanentDelete;
        return this;
    }
    public set isPermanentDelete(isPermanentDelete: boolean  | undefined) {
        this['is_permanent_delete'] = isPermanentDelete;
    }
    public get isPermanentDelete(): boolean | undefined {
        return this['is_permanent_delete'];
    }
    public withSrcProjectId(srcProjectId: string): BatchDeleteIpdIssuesRequest {
        this['src_project_id'] = srcProjectId;
        return this;
    }
    public set srcProjectId(srcProjectId: string  | undefined) {
        this['src_project_id'] = srcProjectId;
    }
    public get srcProjectId(): string | undefined {
        return this['src_project_id'];
    }
    public withBody(body: Array<string>): BatchDeleteIpdIssuesRequest {
        this['body'] = body;
        return this;
    }
}