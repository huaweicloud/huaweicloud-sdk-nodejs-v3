

export class ComponentInfo {
    public id?: string;
    public name?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'application_id'?: string;
    public path?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ComponentInfo {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): ComponentInfo {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): ComponentInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withApplicationId(applicationId: string): ComponentInfo {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withPath(path: string): ComponentInfo {
        this['path'] = path;
        return this;
    }
}