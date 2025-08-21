

export class ListProjectMergeRequestApproverSettingsRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectMergeRequestApproverSettingsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListProjectMergeRequestApproverSettingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectMergeRequestApproverSettingsRequest {
        this['limit'] = limit;
        return this;
    }
}