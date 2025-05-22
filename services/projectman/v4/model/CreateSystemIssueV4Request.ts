import { CreateSystemIssueRequestV4 } from './CreateSystemIssueRequestV4';


export class CreateSystemIssueV4Request {
    private 'project_id'?: string;
    public body?: CreateSystemIssueRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateSystemIssueV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateSystemIssueRequestV4): CreateSystemIssueV4Request {
        this['body'] = body;
        return this;
    }
}