

export class UpdateAddressSetDto {
    public name?: string;
    public description?: string;
    private 'address_type'?: UpdateAddressSetDtoAddressTypeEnum | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateAddressSetDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAddressSetDto {
        this['description'] = description;
        return this;
    }
    public withAddressType(addressType: UpdateAddressSetDtoAddressTypeEnum): UpdateAddressSetDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: UpdateAddressSetDtoAddressTypeEnum | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAddressSetDtoAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
