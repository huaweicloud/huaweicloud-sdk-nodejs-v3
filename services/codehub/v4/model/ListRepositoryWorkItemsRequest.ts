

export class ListRepositoryWorkItemsRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    private 'project_id'?: string;
    private 'is_ipd'?: boolean;
    public subject?: string;
    private 'target_branch'?: string;
    public constructor(repositoryId?: number, projectId?: string, isIpd?: boolean) { 
        this['repository_id'] = repositoryId;
        this['project_id'] = projectId;
        this['is_ipd'] = isIpd;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryWorkItemsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryWorkItemsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryWorkItemsRequest {
        this['limit'] = limit;
        return this;
    }
    public withProjectId(projectId: string): ListRepositoryWorkItemsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsIpd(isIpd: boolean): ListRepositoryWorkItemsRequest {
        this['is_ipd'] = isIpd;
        return this;
    }
    public set isIpd(isIpd: boolean  | undefined) {
        this['is_ipd'] = isIpd;
    }
    public get isIpd(): boolean | undefined {
        return this['is_ipd'];
    }
    public withSubject(subject: string): ListRepositoryWorkItemsRequest {
        this['subject'] = subject;
        return this;
    }
    public withTargetBranch(targetBranch: string): ListRepositoryWorkItemsRequest {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
}