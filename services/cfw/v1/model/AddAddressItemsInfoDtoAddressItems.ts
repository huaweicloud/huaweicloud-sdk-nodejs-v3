

export class AddAddressItemsInfoDtoAddressItems {
    private 'address_type'?: number;
    public address?: string;
    public description?: string;
    public constructor(address?: string) { 
        this['address'] = address;
    }
    public withAddressType(addressType: number): AddAddressItemsInfoDtoAddressItems {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): AddAddressItemsInfoDtoAddressItems {
        this['address'] = address;
        return this;
    }
    public withDescription(description: string): AddAddressItemsInfoDtoAddressItems {
        this['description'] = description;
        return this;
    }
}