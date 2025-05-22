import { CreateProjectDomainRequestBody } from './CreateProjectDomainRequestBody';


export class UpdateProjectDomainRequest {
    private 'project_id'?: string;
    private 'domain_id'?: string;
    public body?: CreateProjectDomainRequestBody;
    public constructor(projectId?: string, domainId?: string) { 
        this['project_id'] = projectId;
        this['domain_id'] = domainId;
    }
    public withProjectId(projectId: string): UpdateProjectDomainRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): UpdateProjectDomainRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: CreateProjectDomainRequestBody): UpdateProjectDomainRequest {
        this['body'] = body;
        return this;
    }
}