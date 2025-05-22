import { SimpleProject } from './SimpleProject';
import { SimpleUser } from './SimpleUser';
import { StatusVo } from './StatusVo';


export class BatchAssociatedIssue {
    private 'source_issue_id'?: number;
    public subject?: string;
    private 'issue_id'?: number;
    public project?: SimpleProject;
    public user?: SimpleUser;
    public status?: StatusVo;
    public constructor() { 
    }
    public withSourceIssueId(sourceIssueId: number): BatchAssociatedIssue {
        this['source_issue_id'] = sourceIssueId;
        return this;
    }
    public set sourceIssueId(sourceIssueId: number  | undefined) {
        this['source_issue_id'] = sourceIssueId;
    }
    public get sourceIssueId(): number | undefined {
        return this['source_issue_id'];
    }
    public withSubject(subject: string): BatchAssociatedIssue {
        this['subject'] = subject;
        return this;
    }
    public withIssueId(issueId: number): BatchAssociatedIssue {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withProject(project: SimpleProject): BatchAssociatedIssue {
        this['project'] = project;
        return this;
    }
    public withUser(user: SimpleUser): BatchAssociatedIssue {
        this['user'] = user;
        return this;
    }
    public withStatus(status: StatusVo): BatchAssociatedIssue {
        this['status'] = status;
        return this;
    }
}