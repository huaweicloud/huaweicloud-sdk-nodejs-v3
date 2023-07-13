

export class AddAddressSetDto {
    private 'object_id': string | undefined;
    public name: string;
    public description?: string;
    private 'address_type'?: AddAddressSetDtoAddressTypeEnum | undefined;
    public constructor(objectId?: any, name?: any) { 
        this['object_id'] = objectId;
        this['name'] = name;
    }
    public withObjectId(objectId: string): AddAddressSetDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withName(name: string): AddAddressSetDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddAddressSetDto {
        this['description'] = description;
        return this;
    }
    public withAddressType(addressType: AddAddressSetDtoAddressTypeEnum): AddAddressSetDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: AddAddressSetDtoAddressTypeEnum | undefined) {
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
export enum AddAddressSetDtoAddressTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
