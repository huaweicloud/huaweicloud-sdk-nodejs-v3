

export class DisableAction {
    public action?: DisableActionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: DisableActionActionEnum | string): DisableAction {
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
