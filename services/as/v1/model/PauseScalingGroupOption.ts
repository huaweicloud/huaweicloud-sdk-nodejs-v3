

export class PauseScalingGroupOption {
    public action?: PauseScalingGroupOptionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: PauseScalingGroupOptionActionEnum | string): PauseScalingGroupOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PauseScalingGroupOptionActionEnum {
    PAUSE = 'pause'
}
