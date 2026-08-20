import { IssueAssociateVO } from './IssueAssociateVO';


export class AssociateIssuesRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'dst_domain_id'?: string;
    public body?: IssueAssociateVO;
    public constructor(projectId?: string, issueId?: string, dstDomainId?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['dst_domain_id'] = dstDomainId;
    }
    public withProjectId(projectId: string): AssociateIssuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): AssociateIssuesRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withDstDomainId(dstDomainId: string): AssociateIssuesRequest {
        this['dst_domain_id'] = dstDomainId;
        return this;
    }
    public set dstDomainId(dstDomainId: string  | undefined) {
        this['dst_domain_id'] = dstDomainId;
    }
    public get dstDomainId(): string | undefined {
        return this['dst_domain_id'];
    }
    public withBody(body: IssueAssociateVO): AssociateIssuesRequest {
        this['body'] = body;
        return this;
    }
}