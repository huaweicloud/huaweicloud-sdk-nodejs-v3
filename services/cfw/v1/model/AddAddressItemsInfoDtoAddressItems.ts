

export class AddAddressItemsInfoDtoAddressItems {
    public name: string;
    private 'address_type'?: number | undefined;
    public address?: string;
    public description?: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): AddAddressItemsInfoDtoAddressItems {
        this['name'] = name;
        return this;
    }
    public withAddressType(addressType: number): AddAddressItemsInfoDtoAddressItems {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
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