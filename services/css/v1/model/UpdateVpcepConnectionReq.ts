

export class UpdateVpcepConnectionReq {
    public action?: string;
    public endpointIdList?: Array<string>;
    public constructor(action?: string, endpointIdList?: Array<string>) { 
        this['action'] = action;
        this['endpointIdList'] = endpointIdList;
    }
    public withAction(action: string): UpdateVpcepConnectionReq {
        this['action'] = action;
        return this;
    }
    public withEndpointIdList(endpointIdList: Array<string>): UpdateVpcepConnectionReq {
        this['endpointIdList'] = endpointIdList;
        return this;
    }
}