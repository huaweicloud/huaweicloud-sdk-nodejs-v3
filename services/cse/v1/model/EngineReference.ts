

export class EngineReference {
    public vpc?: string;
    public azList?: Array<string>;
    public networkId?: string;
    public subnetCidr?: string;
    public subnetCidrV6?: string;
    public subnetGateway?: string;
    public publicIpId?: string;
    public serviceLimit?: number;
    public instanceLimit?: number;
    public inputs?: { [key: string]: string; };
    public constructor() { 
    }
    public withVpc(vpc: string): EngineReference {
        this['vpc'] = vpc;
        return this;
    }
    public withAzList(azList: Array<string>): EngineReference {
        this['azList'] = azList;
        return this;
    }
    public withNetworkId(networkId: string): EngineReference {
        this['networkId'] = networkId;
        return this;
    }
    public withSubnetCidr(subnetCidr: string): EngineReference {
        this['subnetCidr'] = subnetCidr;
        return this;
    }
    public withSubnetCidrV6(subnetCidrV6: string): EngineReference {
        this['subnetCidrV6'] = subnetCidrV6;
        return this;
    }
    public withSubnetGateway(subnetGateway: string): EngineReference {
        this['subnetGateway'] = subnetGateway;
        return this;
    }
    public withPublicIpId(publicIpId: string): EngineReference {
        this['publicIpId'] = publicIpId;
        return this;
    }
    public withServiceLimit(serviceLimit: number): EngineReference {
        this['serviceLimit'] = serviceLimit;
        return this;
    }
    public withInstanceLimit(instanceLimit: number): EngineReference {
        this['instanceLimit'] = instanceLimit;
        return this;
    }
    public withInputs(inputs: { [key: string]: string; }): EngineReference {
        this['inputs'] = inputs;
        return this;
    }
}