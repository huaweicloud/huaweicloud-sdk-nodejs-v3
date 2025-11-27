

export class ApplicationViewQueryResponseData {
    public id?: string;
    public name?: string;
    public code?: string;
    public type?: string;
    private 'parent_id'?: string;
    private 'component_id'?: string;
    private 'application_id'?: string;
    public path?: string;
    public vendor?: string;
    private 'related_domain_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ApplicationViewQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationViewQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): ApplicationViewQueryResponseData {
        this['code'] = code;
        return this;
    }
    public withType(type: string): ApplicationViewQueryResponseData {
        this['type'] = type;
        return this;
    }
    public withParentId(parentId: string): ApplicationViewQueryResponseData {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withComponentId(componentId: string): ApplicationViewQueryResponseData {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): ApplicationViewQueryResponseData {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withPath(path: string): ApplicationViewQueryResponseData {
        this['path'] = path;
        return this;
    }
    public withVendor(vendor: string): ApplicationViewQueryResponseData {
        this['vendor'] = vendor;
        return this;
    }
    public withRelatedDomainId(relatedDomainId: string): ApplicationViewQueryResponseData {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
}