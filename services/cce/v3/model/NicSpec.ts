

export class NicSpec {
    public subnetId?: string;
    public fixedIps?: Array<string>;
    public ipBlock?: string;
    public subnetList?: Array<string>;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): NicSpec {
        this['subnetId'] = subnetId;
        return this;
    }
    public withFixedIps(fixedIps: Array<string>): NicSpec {
        this['fixedIps'] = fixedIps;
        return this;
    }
    public withIpBlock(ipBlock: string): NicSpec {
        this['ipBlock'] = ipBlock;
        return this;
    }
    public withSubnetList(subnetList: Array<string>): NicSpec {
        this['subnetList'] = subnetList;
        return this;
    }
}