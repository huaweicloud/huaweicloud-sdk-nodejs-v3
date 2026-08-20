

export class ThirdPartyAssociatedDTO {
    private 'domain_id'?: string;
    public id?: string;
    private 'created_date'?: string;
    private 'created_by'?: string;
    public title?: string;
    public url?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): ThirdPartyAssociatedDTO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withId(id: string): ThirdPartyAssociatedDTO {
        this['id'] = id;
        return this;
    }
    public withCreatedDate(createdDate: string): ThirdPartyAssociatedDTO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCreatedBy(createdBy: string): ThirdPartyAssociatedDTO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withTitle(title: string): ThirdPartyAssociatedDTO {
        this['title'] = title;
        return this;
    }
    public withUrl(url: string): ThirdPartyAssociatedDTO {
        this['url'] = url;
        return this;
    }
}