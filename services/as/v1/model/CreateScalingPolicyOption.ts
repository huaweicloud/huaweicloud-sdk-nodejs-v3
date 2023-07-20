import { ScalingPolicyActionV1 } from './ScalingPolicyActionV1';
import { ScheduledPolicy } from './ScheduledPolicy';


export class CreateScalingPolicyOption {
    private 'scaling_policy_name'?: string;
    private 'scaling_group_id'?: string;
    private 'scaling_policy_type'?: CreateScalingPolicyOptionScalingPolicyTypeEnum | string;
    private 'alarm_id'?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'scaling_policy_action'?: ScalingPolicyActionV1;
    private 'cool_down_time'?: number;
    public constructor(scalingPolicyName?: string, scalingGroupId?: string, scalingPolicyType?: string) { 
        this['scaling_policy_name'] = scalingPolicyName;
        this['scaling_group_id'] = scalingGroupId;
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public withScalingPolicyName(scalingPolicyName: string): CreateScalingPolicyOption {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingGroupId(scalingGroupId: string): CreateScalingPolicyOption {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScalingPolicyType(scalingPolicyType: CreateScalingPolicyOptionScalingPolicyTypeEnum | string): CreateScalingPolicyOption {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: CreateScalingPolicyOptionScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): CreateScalingPolicyOptionScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withAlarmId(alarmId: string): CreateScalingPolicyOption {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): CreateScalingPolicyOption {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withScalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV1): CreateScalingPolicyOption {
        this['scaling_policy_action'] = scalingPolicyAction;
        return this;
    }
    public set scalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV1  | undefined) {
        this['scaling_policy_action'] = scalingPolicyAction;
    }
    public get scalingPolicyAction(): ScalingPolicyActionV1 | undefined {
        return this['scaling_policy_action'];
    }
    public withCoolDownTime(coolDownTime: number): CreateScalingPolicyOption {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateScalingPolicyOptionScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE'
}
