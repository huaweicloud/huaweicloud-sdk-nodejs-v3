

export class DeleteDomainDto {
    private 'object_id'?: string;
    private 'domain_address_ids'?: Array<string>;
    public constructor(objectId?: string, domainAddressIds?: Array<string>) { 
        this['object_id'] = objectId;
        this['domain_address_ids'] = domainAddressIds;
    }
    public withObjectId(objectId: string): DeleteDomainDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withDomainAddressIds(domainAddressIds: Array<string>): DeleteDomainDto {
        this['domain_address_ids'] = domainAddressIds;
        return this;
    }
    public set domainAddressIds(domainAddressIds: Array<string>  | undefined) {
        this['domain_address_ids'] = domainAddressIds;
    }
    public get domainAddressIds(): Array<string> | undefined {
        return this['domain_address_ids'];
    }
}