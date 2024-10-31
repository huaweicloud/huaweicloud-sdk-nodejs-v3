

export class AddAddressSetDto {
    private 'object_id'?: string;
    public name?: string;
    public description?: string;
    private 'address_type'?: number;
    public constructor(objectId?: string, name?: string) { 
        this['object_id'] = objectId;
        this['name'] = name;
    }
    public withObjectId(objectId: string): AddAddressSetDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
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
    public withAddressType(addressType: number): AddAddressSetDto {
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