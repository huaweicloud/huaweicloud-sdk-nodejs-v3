

export class ShowQuotasRequest {
    public type?: Array<string>;
    public erId?: Array<string>;
    public routeTableId?: Array<string>;
    public vpcId?: Array<string>;
    public constructor() { 
    }
    public withType(type: Array<string>): ShowQuotasRequest {
        this['type'] = type;
        return this;
    }
    public withErId(erId: Array<string>): ShowQuotasRequest {
        this['erId'] = erId;
        return this;
    }
    public withRouteTableId(routeTableId: Array<string>): ShowQuotasRequest {
        this['routeTableId'] = routeTableId;
        return this;
    }
    public withVpcId(vpcId: Array<string>): ShowQuotasRequest {
        this['vpcId'] = vpcId;
        return this;
    }
}