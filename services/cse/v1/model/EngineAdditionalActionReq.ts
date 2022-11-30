

export class EngineAdditionalActionReq {
    public action: EngineAdditionalActionReqActionEnum;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: EngineAdditionalActionReqActionEnum): EngineAdditionalActionReq {
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
