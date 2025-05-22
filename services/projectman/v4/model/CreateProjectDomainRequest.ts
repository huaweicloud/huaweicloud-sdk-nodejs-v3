import { CreateProjectDomainRequestBody } from './CreateProjectDomainRequestBody';


export class CreateProjectDomainRequest {
    private 'project_id'?: string;
    public body?: CreateProjectDomainRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateProjectDomainRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateProjectDomainRequestBody): CreateProjectDomainRequest {
        this['body'] = body;
        return this;
    }
}