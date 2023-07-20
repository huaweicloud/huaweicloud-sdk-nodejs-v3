

export class PauseScalingPolicyOption {
    public action?: PauseScalingPolicyOptionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: PauseScalingPolicyOptionActionEnum | string): PauseScalingPolicyOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PauseScalingPolicyOptionActionEnum {
    PAUSE = 'pause'
}
