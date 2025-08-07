

export class IpReputationMapResponseBodyIpReputationMap {
    public idc?: Array<string>;
    public constructor() { 
    }
    public withIdc(idc: Array<string>): IpReputationMapResponseBodyIpReputationMap {
        this['idc'] = idc;
        return this;
    }
}