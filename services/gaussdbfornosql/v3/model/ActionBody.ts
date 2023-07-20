

export class ActionBody {
    public action?: ActionBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ActionBodyActionEnum | string): ActionBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionBodyActionEnum {
    PAUSE = 'pause',
    RESUME = 'resume'
}
