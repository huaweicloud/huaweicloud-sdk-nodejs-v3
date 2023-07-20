

export class ResumeScalingGroupOption {
    public action?: ResumeScalingGroupOptionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ResumeScalingGroupOptionActionEnum | string): ResumeScalingGroupOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResumeScalingGroupOptionActionEnum {
    RESUME = 'resume'
}
