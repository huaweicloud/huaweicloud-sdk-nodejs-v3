

export class UpdateGlobalDcGatewayRequestBodyGlobalDcGateway {
    public name?: string;
    public description?: string;
    private 'address_family'?: UpdateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string;
    public constructor() { 
    }
    public withName(name: string): UpdateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: UpdateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string): UpdateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: UpdateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): UpdateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
