

export class DisableAction {
    public action: DisableActionActionEnum;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withAction(action: DisableActionActionEnum): DisableAction {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisableActionActionEnum {
    DISABLE = 'disable'
}
