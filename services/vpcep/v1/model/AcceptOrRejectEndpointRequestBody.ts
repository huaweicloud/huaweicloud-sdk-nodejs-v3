

export class AcceptOrRejectEndpointRequestBody {
    public action?: AcceptOrRejectEndpointRequestBodyActionEnum | string;
    public endpoints?: Array<string>;
    public constructor(action?: string, endpoints?: Array<string>) { 
        this['action'] = action;
        this['endpoints'] = endpoints;
    }
    public withAction(action: AcceptOrRejectEndpointRequestBodyActionEnum | string): AcceptOrRejectEndpointRequestBody {
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
