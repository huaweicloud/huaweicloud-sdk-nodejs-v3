

export class AddressGroupVO {
    private 'address_set_type'?: number;
    public name?: string;
    private 'set_id'?: string;
    public constructor() { 
    }
    public withAddressSetType(addressSetType: number): AddressGroupVO {
        this['address_set_type'] = addressSetType;
        return this;
    }
    public set addressSetType(addressSetType: number  | undefined) {
        this['address_set_type'] = addressSetType;
    }
    public get addressSetType(): number | undefined {
        return this['address_set_type'];
    }
    public withName(name: string): AddressGroupVO {
        this['name'] = name;
        return this;
    }
    public withSetId(setId: string): AddressGroupVO {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
}