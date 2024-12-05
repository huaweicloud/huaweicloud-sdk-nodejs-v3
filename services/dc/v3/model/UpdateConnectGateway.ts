

export class UpdateConnectGateway {
    public name?: string;
    public description?: string;
    private 'address_family'?: UpdateConnectGatewayAddressFamilyEnum | string;
    public constructor() { 
    }
    public withName(name: string): UpdateConnectGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateConnectGateway {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: UpdateConnectGatewayAddressFamilyEnum | string): UpdateConnectGateway {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: UpdateConnectGatewayAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): UpdateConnectGatewayAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateConnectGatewayAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
