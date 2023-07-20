

export class AddressItemListResponseDTODataRecords {
    private 'item_id'?: string;
    public name?: string;
    public description?: string;
    private 'address_type'?: number;
    public address?: string;
    public constructor() { 
    }
    public withItemId(itemId: string): AddressItemListResponseDTODataRecords {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withName(name: string): AddressItemListResponseDTODataRecords {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddressItemListResponseDTODataRecords {
        this['description'] = description;
        return this;
    }
    public withAddressType(addressType: number): AddressItemListResponseDTODataRecords {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): AddressItemListResponseDTODataRecords {
        this['address'] = address;
        return this;
    }
}