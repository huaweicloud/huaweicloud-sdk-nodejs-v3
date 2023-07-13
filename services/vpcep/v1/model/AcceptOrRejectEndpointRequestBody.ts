

export class AcceptOrRejectEndpointRequestBody {
    public action: AcceptOrRejectEndpointRequestBodyActionEnum;
    public endpoints: Array<string>;
    public constructor(action?: any, endpoints?: any) { 
        this['action'] = action;
        this['endpoints'] = endpoints;
    }
    public withAction(action: AcceptOrRejectEndpointRequestBodyActionEnum): AcceptOrRejectEndpointRequestBody {
        this['action'] = action;
        return this;
    }
    public withEndpoints(endpoints: Array<string>): AcceptOrRejectEndpointRequestBody {
        this['endpoints'] = endpoints;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AcceptOrRejectEndpointRequestBodyActionEnum {
    RECEIVE = 'receive',
    REJECT = 'reject'
}
