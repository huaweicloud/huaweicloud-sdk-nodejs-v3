

export class DomainIPWhiteListModel {
    public id?: number;
    private 'domain_id'?: string;
    public region?: string;
    public type?: string;
    public value?: string;
    public created?: number;
    public updated?: number;
    public constructor() { 
    }
    public withId(id: number): DomainIPWhiteListModel {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): DomainIPWhiteListModel {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegion(region: string): DomainIPWhiteListModel {
        this['region'] = region;
        return this;
    }
    public withType(type: string): DomainIPWhiteListModel {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): DomainIPWhiteListModel {
        this['value'] = value;
        return this;
    }
    public withCreated(created: number): DomainIPWhiteListModel {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: number): DomainIPWhiteListModel {
        this['updated'] = updated;
        return this;
    }
}