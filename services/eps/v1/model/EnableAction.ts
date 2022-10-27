

export class EnableAction {
    public action: EnableActionActionEnum;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: EnableActionActionEnum): EnableAction {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnableActionActionEnum {
    ENABLE = 'enable'
}
