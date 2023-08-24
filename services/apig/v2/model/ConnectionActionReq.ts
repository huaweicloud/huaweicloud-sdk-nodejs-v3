

export class ConnectionActionReq {
    public action?: ConnectionActionReqActionEnum | string;
    public endpoints?: Array<string>;
    public constructor(action?: string, endpoints?: Array<string>) { 
        this['action'] = action;
        this['endpoints'] = endpoints;
    }
    public withAction(action: ConnectionActionReqActionEnum | string): ConnectionActionReq {
        this['action'] = action;
        return this;
    }
    public withEndpoints(endpoints: Array<string>): ConnectionActionReq {
        this['endpoints'] = endpoints;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectionActionReqActionEnum {
    RECEIVE = 'receive',
    REJECT = 'reject'
}
