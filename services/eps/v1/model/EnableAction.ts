

export class EnableAction {
    public action?: EnableActionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: EnableActionActionEnum | string): EnableAction {
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
