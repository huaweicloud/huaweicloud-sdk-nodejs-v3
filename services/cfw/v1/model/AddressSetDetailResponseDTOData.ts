

export class AddressSetDetailResponseDTOData {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'address_set_type'?: number;
    private 'address_type'?: number;
    public constructor() { 
    }
    public withId(id: string): AddressSetDetailResponseDTOData {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AddressSetDetailResponseDTOData {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddressSetDetailResponseDTOData {
        this['description'] = description;
        return this;
    }
    public withAddressSetType(addressSetType: number): AddressSetDetailResponseDTOData {
        this['address_set_type'] = addressSetType;
        return this;
    }
    public set addressSetType(addressSetType: number  | undefined) {
        this['address_set_type'] = addressSetType;
    }
    public get addressSetType(): number | undefined {
        return this['address_set_type'];
    }
    public withAddressType(addressType: number): AddressSetDetailResponseDTOData {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
}