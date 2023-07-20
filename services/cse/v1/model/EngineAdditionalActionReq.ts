

export class EngineAdditionalActionReq {
    public action?: EngineAdditionalActionReqActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: EngineAdditionalActionReqActionEnum | string): EngineAdditionalActionReq {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EngineAdditionalActionReqActionEnum {
    RETRY = 'Retry'
}
