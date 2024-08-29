

export class NodeSpecUpdateNodeNicSpecUpdatePrimaryNic {
    public subnetId?: string;
    public subnetList?: Array<string>;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): NodeSpecUpdateNodeNicSpecUpdatePrimaryNic {
        this['subnetId'] = subnetId;
        return this;
    }
    public withSubnetList(subnetList: Array<string>): NodeSpecUpdateNodeNicSpecUpdatePrimaryNic {
        this['subnetList'] = subnetList;
        return this;
    }
}