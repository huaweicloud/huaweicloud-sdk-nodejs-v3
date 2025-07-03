

export class UpdateVpcepConnectionReq {
    public action?: string;
    private 'endpoint_id_list'?: Array<string>;
    public constructor(action?: string, endpointIdList?: Array<string>) { 
        this['action'] = action;
        this['endpoint_id_list'] = endpointIdList;
    }
    public withAction(action: string): UpdateVpcepConnectionReq {
        this['action'] = action;
        return this;
    }
    public withEndpointIdList(endpointIdList: Array<string>): UpdateVpcepConnectionReq {
        this['endpoint_id_list'] = endpointIdList;
        return this;
    }
    public set endpointIdList(endpointIdList: Array<string>  | undefined) {
        this['endpoint_id_list'] = endpointIdList;
    }
    public get endpointIdList(): Array<string> | undefined {
        return this['endpoint_id_list'];
    }
}