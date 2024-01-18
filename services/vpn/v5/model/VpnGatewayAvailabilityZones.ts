

export class VpnGatewayAvailabilityZones {
    public vpc?: Array<string>;
    public er?: Array<string>;
    public constructor() { 
    }
    public withVpc(vpc: Array<string>): VpnGatewayAvailabilityZones {
        this['vpc'] = vpc;
        return this;
    }
    public withEr(er: Array<string>): VpnGatewayAvailabilityZones {
        this['er'] = er;
        return this;
    }
}