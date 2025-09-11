import { SearchIpdIssuesRequestBody } from './SearchIpdIssuesRequestBody';


export class ListIpdProjectIssuesRequest {
    private 'project_id'?: string;
    private 'is_backlog'?: boolean;
    private 'issue_type'?: string;
    private 'src_domain_id'?: string;
    public view?: string;
    public body?: SearchIpdIssuesRequestBody;
    public constructor(projectId?: string, issueType?: string) { 
        this['project_id'] = projectId;
        this['issue_type'] = issueType;
    }
    public withProjectId(projectId: string): ListIpdProjectIssuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsBacklog(isBacklog: boolean): ListIpdProjectIssuesRequest {
        this['is_backlog'] = isBacklog;
        return this;
    }
    public set isBacklog(isBacklog: boolean  | undefined) {
        this['is_backlog'] = isBacklog;
    }
    public get isBacklog(): boolean | undefined {
        return this['is_backlog'];
    }
    public withIssueType(issueType: string): ListIpdProjectIssuesRequest {
        this['issue_type'] = issueType;
        return this;
    }
    public set issueType(issueType: string  | undefined) {
        this['issue_type'] = issueType;
    }
    public get issueType(): string | undefined {
        return this['issue_type'];
    }
    public withSrcDomainId(srcDomainId: string): ListIpdProjectIssuesRequest {
        this['src_domain_id'] = srcDomainId;
        return this;
    }
    public set srcDomainId(srcDomainId: string  | undefined) {
        this['src_domain_id'] = srcDomainId;
    }
    public get srcDomainId(): string | undefined {
        return this['src_domain_id'];
    }
    public withView(view: string): ListIpdProjectIssuesRequest {
        this['view'] = view;
        return this;
    }
    public withBody(body: SearchIpdIssuesRequestBody): ListIpdProjectIssuesRequest {
        this['body'] = body;
        return this;
    }
}