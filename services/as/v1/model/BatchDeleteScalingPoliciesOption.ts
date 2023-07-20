

export class BatchDeleteScalingPoliciesOption {
    private 'scaling_policy_id'?: Array<string>;
    private 'force_delete'?: BatchDeleteScalingPoliciesOptionForceDeleteEnum | string;
    public action?: BatchDeleteScalingPoliciesOptionActionEnum | string;
    private 'delete_alarm'?: string;
    public constructor(scalingPolicyId?: Array<string>, action?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
        this['action'] = action;
    }
    public withScalingPolicyId(scalingPolicyId: Array<string>): BatchDeleteScalingPoliciesOption {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: Array<string>  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): Array<string> | undefined {
        return this['scaling_policy_id'];
    }
    public withForceDelete(forceDelete: BatchDeleteScalingPoliciesOptionForceDeleteEnum | string): BatchDeleteScalingPoliciesOption {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: BatchDeleteScalingPoliciesOptionForceDeleteEnum | string  | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete(): BatchDeleteScalingPoliciesOptionForceDeleteEnum | string | undefined {
        return this['force_delete'];
    }
    public withAction(action: BatchDeleteScalingPoliciesOptionActionEnum | string): BatchDeleteScalingPoliciesOption {
        this['action'] = action;
        return this;
    }
    public withDeleteAlarm(deleteAlarm: string): BatchDeleteScalingPoliciesOption {
        this['delete_alarm'] = deleteAlarm;
        return this;
    }
    public set deleteAlarm(deleteAlarm: string  | undefined) {
        this['delete_alarm'] = deleteAlarm;
    }
    public get deleteAlarm(): string | undefined {
        return this['delete_alarm'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteScalingPoliciesOptionForceDeleteEnum {
    NO = 'no',
    YES = 'yes'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteScalingPoliciesOptionActionEnum {
    DELETE = 'delete'
}
