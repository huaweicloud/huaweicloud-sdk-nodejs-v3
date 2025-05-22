import { CreateIssueRequestV4 } from './CreateIssueRequestV4';


export class CreateIssueV4Request {
    private 'project_id'?: string;
    public body?: CreateIssueRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateIssueV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateIssueRequestV4): CreateIssueV4Request {
        this['body'] = body;
        return this;
    }
}