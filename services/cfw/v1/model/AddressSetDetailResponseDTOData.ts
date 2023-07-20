

export class AddressSetDetailResponseDTOData {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'address_type'?: AddressSetDetailResponseDTODataAddressTypeEnum | number;
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
    public withAddressType(addressType: AddressSetDetailResponseDTODataAddressTypeEnum | number): AddressSetDetailResponseDTOData {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: AddressSetDetailResponseDTODataAddressTypeEnum | number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): AddressSetDetailResponseDTODataAddressTypeEnum | number | undefined {
        return this['address_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddressSetDetailResponseDTODataAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
