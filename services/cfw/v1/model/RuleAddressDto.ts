

export class RuleAddressDto {
    public type?: number;
    private 'address_type'?: number;
    public address?: string;
    private 'address_set_id'?: string;
    private 'address_set_name'?: string;
    private 'domain_address_name'?: string;
    public constructor(type?: number) { 
        this['type'] = type;
    }
    public withType(type: number): RuleAddressDto {
        this['type'] = type;
        return this;
    }
    public withAddressType(addressType: number): RuleAddressDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): RuleAddressDto {
        this['address'] = address;
        return this;
    }
    public withAddressSetId(addressSetId: string): RuleAddressDto {
        this['address_set_id'] = addressSetId;
        return this;
    }
    public set addressSetId(addressSetId: string  | undefined) {
        this['address_set_id'] = addressSetId;
    }
    public get addressSetId(): string | undefined {
        return this['address_set_id'];
    }
    public withAddressSetName(addressSetName: string): RuleAddressDto {
        this['address_set_name'] = addressSetName;
        return this;
    }
    public set addressSetName(addressSetName: string  | undefined) {
        this['address_set_name'] = addressSetName;
    }
    public get addressSetName(): string | undefined {
        return this['address_set_name'];
    }
    public withDomainAddressName(domainAddressName: string): RuleAddressDto {
        this['domain_address_name'] = domainAddressName;
        return this;
    }
    public set domainAddressName(domainAddressName: string  | undefined) {
        this['domain_address_name'] = domainAddressName;
    }
    public get domainAddressName(): string | undefined {
        return this['domain_address_name'];
    }
}