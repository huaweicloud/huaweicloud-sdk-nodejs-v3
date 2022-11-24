

export class RuleAddressDto {
    public type: number;
    private 'address_type'?: number | undefined;
    public address?: string;
    private 'address_set_id'?: string | undefined;
    private 'address_set_name'?: string | undefined;
    private 'domain_address_name'?: string | undefined;
    public constructor(type?: any) { 
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
    public set addressType(addressType: number | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
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
    public set addressSetId(addressSetId: string | undefined) {
        this['address_set_id'] = addressSetId;
    }
    public get addressSetId() {
        return this['address_set_id'];
    }
    public withAddressSetName(addressSetName: string): RuleAddressDto {
        this['address_set_name'] = addressSetName;
        return this;
    }
    public set addressSetName(addressSetName: string | undefined) {
        this['address_set_name'] = addressSetName;
    }
    public get addressSetName() {
        return this['address_set_name'];
    }
    public withDomainAddressName(domainAddressName: string): RuleAddressDto {
        this['domain_address_name'] = domainAddressName;
        return this;
    }
    public set domainAddressName(domainAddressName: string | undefined) {
        this['domain_address_name'] = domainAddressName;
    }
    public get domainAddressName() {
        return this['domain_address_name'];
    }
}