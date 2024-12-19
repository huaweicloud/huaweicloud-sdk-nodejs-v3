

export class UpdateGlobalDcGateway {
    public name?: string;
    public description?: string;
    private 'address_family'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateGlobalDcGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGlobalDcGateway {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: string): UpdateGlobalDcGateway {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
}