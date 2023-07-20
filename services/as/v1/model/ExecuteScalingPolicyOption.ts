

export class ExecuteScalingPolicyOption {
    public action?: ExecuteScalingPolicyOptionActionEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: ExecuteScalingPolicyOptionActionEnum | string): ExecuteScalingPolicyOption {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteScalingPolicyOptionActionEnum {
    EXECUTE = 'execute'
}
