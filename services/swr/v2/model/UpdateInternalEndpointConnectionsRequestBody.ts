

export class UpdateInternalEndpointConnectionsRequestBody {
    public endpoints?: Array<string>;
    public action?: UpdateInternalEndpointConnectionsRequestBodyActionEnum | string;
    public constructor(endpoints?: Array<string>, action?: string) { 
        this['endpoints'] = endpoints;
        this['action'] = action;
    }
    public withEndpoints(endpoints: Array<string>): UpdateInternalEndpointConnectionsRequestBody {
        this['endpoints'] = endpoints;
        return this;
    }
    public withAction(action: UpdateInternalEndpointConnectionsRequestBodyActionEnum | string): UpdateInternalEndpointConnectionsRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInternalEndpointConnectionsRequestBodyActionEnum {
    RECEIVE = 'receive',
    REJECT = 'reject'
}
