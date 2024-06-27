

export class CaptureRuleAddressDto {
    public address?: string;
    private 'address_type'?: number;
    public type?: number;
    public constructor(address?: string, addressType?: number, type?: number) { 
        this['address'] = address;
        this['address_type'] = addressType;
        this['type'] = type;
    }
    public withAddress(address: string): CaptureRuleAddressDto {
        this['address'] = address;
        return this;
    }
    public withAddressType(addressType: number): CaptureRuleAddressDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withType(type: number): CaptureRuleAddressDto {
        this['type'] = type;
        return this;
    }
}