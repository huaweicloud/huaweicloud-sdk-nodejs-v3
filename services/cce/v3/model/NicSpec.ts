

export class NicSpec {
    public fixedIps?: Array<string>;
    public ipBlock?: string;
    public subnetId?: string;
    public constructor() { 
    }
    public withFixedIps(fixedIps: Array<string>): NicSpec {
        this['fixedIps'] = fixedIps;
        return this;
    }
    public withIpBlock(ipBlock: string): NicSpec {
        this['ipBlock'] = ipBlock;
        return this;
    }
    public withSubnetId(subnetId: string): NicSpec {
        this['subnetId'] = subnetId;
        return this;
    }
}