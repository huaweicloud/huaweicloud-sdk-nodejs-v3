

export class ProjectInfoVO {
    public id?: string;
    public name?: string;
    private 'project_type'?: string;
    private 'domain_id'?: string;
    private 'model_id'?: string;
    private 'accept_rr'?: number;
    public category?: string;
    private 'created_by_name'?: string;
    public constructor() { 
    }
    public withId(id: string): ProjectInfoVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ProjectInfoVO {
        this['name'] = name;
        return this;
    }
    public withProjectType(projectType: string): ProjectInfoVO {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withDomainId(domainId: string): ProjectInfoVO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withModelId(modelId: string): ProjectInfoVO {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withAcceptRr(acceptRr: number): ProjectInfoVO {
        this['accept_rr'] = acceptRr;
        return this;
    }
    public set acceptRr(acceptRr: number  | undefined) {
        this['accept_rr'] = acceptRr;
    }
    public get acceptRr(): number | undefined {
        return this['accept_rr'];
    }
    public withCategory(category: string): ProjectInfoVO {
        this['category'] = category;
        return this;
    }
    public withCreatedByName(createdByName: string): ProjectInfoVO {
        this['created_by_name'] = createdByName;
        return this;
    }
    public set createdByName(createdByName: string  | undefined) {
        this['created_by_name'] = createdByName;
    }
    public get createdByName(): string | undefined {
        return this['created_by_name'];
    }
}