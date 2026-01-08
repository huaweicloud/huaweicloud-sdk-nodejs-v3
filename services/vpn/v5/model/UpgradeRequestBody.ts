

export class UpgradeRequestBody {
    public action?: UpgradeRequestBodyActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: UpgradeRequestBodyActionEnum | string): UpgradeRequestBody {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeRequestBodyActionEnum {
    START = 'start',
    FINISH = 'finish',
    ROLLBACK = 'rollback'
}
