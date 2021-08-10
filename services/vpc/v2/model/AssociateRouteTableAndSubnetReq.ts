

export class AssociateRouteTableAndSubnetReq {
    public associate?: Array<string>;
    public disassociate?: Array<string>;
    public constructor() { 
    }
    public withAssociate(associate: Array<string>): AssociateRouteTableAndSubnetReq {
        this['associate'] = associate;
        return this;
    }
    public withDisassociate(disassociate: Array<string>): AssociateRouteTableAndSubnetReq {
        this['disassociate'] = disassociate;
        return this;
    }
}