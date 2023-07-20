

export class ResumeScalingPolicyOption {
    public action?: ResumeScalingPolicyOptionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ResumeScalingPolicyOptionActionEnum | string): ResumeScalingPolicyOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResumeScalingPolicyOptionActionEnum {
    RESUME = 'resume'
}
