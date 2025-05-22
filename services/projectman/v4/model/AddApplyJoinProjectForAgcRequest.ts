

export class AddApplyJoinProjectForAgcRequest {
    private 'Domain-Id'?: string;
    private 'User-Id'?: string;
    private 'project_id'?: string;
    public constructor(domainId?: string, userId?: string, projectId?: string) { 
        this['Domain-Id'] = domainId;
        this['User-Id'] = userId;
        this['project_id'] = projectId;
    }
    public withDomainId(domainId: string): AddApplyJoinProjectForAgcRequest {
        this['Domain-Id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['Domain-Id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['Domain-Id'];
    }
    public withUserId(userId: string): AddApplyJoinProjectForAgcRequest {
        this['User-Id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['User-Id'] = userId;
    }
    public get userId(): string | undefined {
        return this['User-Id'];
    }
    public withProjectId(projectId: string): AddApplyJoinProjectForAgcRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}