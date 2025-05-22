import { SimpleProject } from './SimpleProject';
import { SimpleUser } from './SimpleUser';
import { StatusVo } from './StatusVo';


export class AssociateIssueDetail {
    public subject?: string;
    private 'issue_id'?: number;
    public project?: SimpleProject;
    public user?: SimpleUser;
    public status?: StatusVo;
    public constructor() { 
    }
    public withSubject(subject: string): AssociateIssueDetail {
        this['subject'] = subject;
        return this;
    }
    public withIssueId(issueId: number): AssociateIssueDetail {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withProject(project: SimpleProject): AssociateIssueDetail {
        this['project'] = project;
        return this;
    }
    public withUser(user: SimpleUser): AssociateIssueDetail {
        this['user'] = user;
        return this;
    }
    public withStatus(status: StatusVo): AssociateIssueDetail {
        this['status'] = status;
        return this;
    }
}