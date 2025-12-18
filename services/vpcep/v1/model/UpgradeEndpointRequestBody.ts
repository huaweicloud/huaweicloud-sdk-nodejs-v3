

export class UpgradeEndpointRequestBody {
    public action?: UpgradeEndpointRequestBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: UpgradeEndpointRequestBodyActionEnum | string): UpgradeEndpointRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeEndpointRequestBodyActionEnum {
    START = 'start'
}
