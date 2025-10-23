

export class ListProjectMergeRequestCanBeAssignedReviewersRequest {
    private 'project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectMergeRequestCanBeAssignedReviewersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: number): ListProjectMergeRequestCanBeAssignedReviewersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectMergeRequestCanBeAssignedReviewersRequest {
        this['limit'] = limit;
        return this;
    }
}