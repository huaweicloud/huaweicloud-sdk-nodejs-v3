import { CreateIpdProjectIssueParam } from './CreateIpdProjectIssueParam';


export class CreateIpdProjectIssueRequest {
    private 'project_id'?: string;
    public body?: CreateIpdProjectIssueParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateIpdProjectIssueRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateIpdProjectIssueParam): CreateIpdProjectIssueRequest {
        this['body'] = body;
        return this;
    }
}