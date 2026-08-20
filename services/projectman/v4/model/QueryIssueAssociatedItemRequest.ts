

export class QueryIssueAssociatedItemRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'issue_type'?: string;
    private 'domain_id'?: string;
    private 'target_project_id'?: string;
    private 'link_field_code'?: string;
    private 'page_no'?: string;
    private 'page_size'?: string;
    public constructor(projectId?: string, issueId?: string, issueType?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['issue_type'] = issueType;
    }
    public withProjectId(projectId: string): QueryIssueAssociatedItemRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): QueryIssueAssociatedItemRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withIssueType(issueType: string): QueryIssueAssociatedItemRequest {
        this['issue_type'] = issueType;
        return this;
    }
    public set issueType(issueType: string  | undefined) {
        this['issue_type'] = issueType;
    }
    public get issueType(): string | undefined {
        return this['issue_type'];
    }
    public withDomainId(domainId: string): QueryIssueAssociatedItemRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTargetProjectId(targetProjectId: string): QueryIssueAssociatedItemRequest {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withLinkFieldCode(linkFieldCode: string): QueryIssueAssociatedItemRequest {
        this['link_field_code'] = linkFieldCode;
        return this;
    }
    public set linkFieldCode(linkFieldCode: string  | undefined) {
        this['link_field_code'] = linkFieldCode;
    }
    public get linkFieldCode(): string | undefined {
        return this['link_field_code'];
    }
    public withPageNo(pageNo: string): QueryIssueAssociatedItemRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: string  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): string | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: string): QueryIssueAssociatedItemRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
}