

export class CreateConnectGateway {
    public name?: string;
    public description?: string;
    private 'address_family'?: CreateConnectGatewayAddressFamilyEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateConnectGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateConnectGateway {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: CreateConnectGatewayAddressFamilyEnum | string): CreateConnectGateway {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: CreateConnectGatewayAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): CreateConnectGatewayAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConnectGatewayAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
