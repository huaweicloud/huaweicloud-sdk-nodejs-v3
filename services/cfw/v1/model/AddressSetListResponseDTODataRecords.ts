

export class AddressSetListResponseDTODataRecords {
    private 'set_id'?: string;
    private 'ref_count'?: number;
    public description?: string;
    private 'address_type'?: number;
    private 'object_id'?: string;
    private 'address_set_type'?: number;
    public name?: string;
    public constructor() { 
    }
    public withSetId(setId: string): AddressSetListResponseDTODataRecords {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withRefCount(refCount: number): AddressSetListResponseDTODataRecords {
        this['ref_count'] = refCount;
        return this;
    }
    public set refCount(refCount: number  | undefined) {
        this['ref_count'] = refCount;
    }
    public get refCount(): number | undefined {
        return this['ref_count'];
    }
    public withDescription(description: string): AddressSetListResponseDTODataRecords {
        this['description'] = description;
        return this;
    }
    public withAddressType(addressType: number): AddressSetListResponseDTODataRecords {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withObjectId(objectId: string): AddressSetListResponseDTODataRecords {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withAddressSetType(addressSetType: number): AddressSetListResponseDTODataRecords {
        this['address_set_type'] = addressSetType;
        return this;
    }
    public set addressSetType(addressSetType: number  | undefined) {
        this['address_set_type'] = addressSetType;
    }
    public get addressSetType(): number | undefined {
        return this['address_set_type'];
    }
    public withName(name: string): AddressSetListResponseDTODataRecords {
        this['name'] = name;
        return this;
    }
}