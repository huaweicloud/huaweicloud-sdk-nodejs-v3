import { ScalingPolicyActionV1 } from './ScalingPolicyActionV1';
import { ScheduledPolicy } from './ScheduledPolicy';


export class ScalingV1PolicyDetail {
    private 'scaling_group_id'?: string;
    private 'scaling_policy_name'?: string;
    private 'scaling_policy_id'?: string;
    private 'policy_status'?: string;
    private 'scaling_policy_type'?: ScalingV1PolicyDetailScalingPolicyTypeEnum | string;
    private 'alarm_id'?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'scaling_policy_action'?: ScalingPolicyActionV1;
    private 'cool_down_time'?: number;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withScalingGroupId(scalingGroupId: string): ScalingV1PolicyDetail {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScalingPolicyName(scalingPolicyName: string): ScalingV1PolicyDetail {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingPolicyId(scalingPolicyId: string): ScalingV1PolicyDetail {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withPolicyStatus(policyStatus: string): ScalingV1PolicyDetail {
        this['policy_status'] = policyStatus;
        return this;
    }
    public set policyStatus(policyStatus: string  | undefined) {
        this['policy_status'] = policyStatus;
    }
    public get policyStatus(): string | undefined {
        return this['policy_status'];
    }
    public withScalingPolicyType(scalingPolicyType: ScalingV1PolicyDetailScalingPolicyTypeEnum | string): ScalingV1PolicyDetail {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: ScalingV1PolicyDetailScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): ScalingV1PolicyDetailScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withAlarmId(alarmId: string): ScalingV1PolicyDetail {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): ScalingV1PolicyDetail {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withScalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV1): ScalingV1PolicyDetail {
        this['scaling_policy_action'] = scalingPolicyAction;
        return this;
    }
    public set scalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV1  | undefined) {
        this['scaling_policy_action'] = scalingPolicyAction;
    }
    public get scalingPolicyAction(): ScalingPolicyActionV1 | undefined {
        return this['scaling_policy_action'];
    }
    public withCoolDownTime(coolDownTime: number): ScalingV1PolicyDetail {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
    public withCreateTime(createTime: string): ScalingV1PolicyDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingV1PolicyDetailScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE'
}
