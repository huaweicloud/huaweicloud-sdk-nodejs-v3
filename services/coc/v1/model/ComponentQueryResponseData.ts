

export class ComponentQueryResponseData {
    public id?: string;
    public name?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'application_id'?: string;
    private 'ep_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentQueryResponseData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ComponentQueryResponseData {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): ComponentQueryResponseData {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): ComponentQueryResponseData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withApplicationId(applicationId: string): ComponentQueryResponseData {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEpId(epId: string): ComponentQueryResponseData {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
}