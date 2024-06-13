import { IntervalAlarmActionsV2 } from './IntervalAlarmActionsV2';
import { ScalingPolicyActionV2 } from './ScalingPolicyActionV2';
import { ScheduledPolicy } from './ScheduledPolicy';


export class CreateScalingPolicyV2Option {
    private 'scaling_policy_name'?: string;
    private 'scaling_resource_id'?: string;
    private 'scaling_resource_type'?: CreateScalingPolicyV2OptionScalingResourceTypeEnum | string;
    private 'scaling_policy_type'?: CreateScalingPolicyV2OptionScalingPolicyTypeEnum | string;
    private 'alarm_id'?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'scaling_policy_action'?: ScalingPolicyActionV2;
    private 'interval_alarm_actions'?: Array<IntervalAlarmActionsV2>;
    private 'cool_down_time'?: number;
    public description?: string;
    public constructor(scalingPolicyName?: string, scalingResourceId?: string, scalingResourceType?: string, scalingPolicyType?: string) { 
        this['scaling_policy_name'] = scalingPolicyName;
        this['scaling_resource_id'] = scalingResourceId;
        this['scaling_resource_type'] = scalingResourceType;
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public withScalingPolicyName(scalingPolicyName: string): CreateScalingPolicyV2Option {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingResourceId(scalingResourceId: string): CreateScalingPolicyV2Option {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withScalingResourceType(scalingResourceType: CreateScalingPolicyV2OptionScalingResourceTypeEnum | string): CreateScalingPolicyV2Option {
        this['scaling_resource_type'] = scalingResourceType;
        return this;
    }
    public set scalingResourceType(scalingResourceType: CreateScalingPolicyV2OptionScalingResourceTypeEnum | string  | undefined) {
        this['scaling_resource_type'] = scalingResourceType;
    }
    public get scalingResourceType(): CreateScalingPolicyV2OptionScalingResourceTypeEnum | string | undefined {
        return this['scaling_resource_type'];
    }
    public withScalingPolicyType(scalingPolicyType: CreateScalingPolicyV2OptionScalingPolicyTypeEnum | string): CreateScalingPolicyV2Option {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: CreateScalingPolicyV2OptionScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): CreateScalingPolicyV2OptionScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withAlarmId(alarmId: string): CreateScalingPolicyV2Option {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): CreateScalingPolicyV2Option {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withScalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV2): CreateScalingPolicyV2Option {
        this['scaling_policy_action'] = scalingPolicyAction;
        return this;
    }
    public set scalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV2  | undefined) {
        this['scaling_policy_action'] = scalingPolicyAction;
    }
    public get scalingPolicyAction(): ScalingPolicyActionV2 | undefined {
        return this['scaling_policy_action'];
    }
    public withIntervalAlarmActions(intervalAlarmActions: Array<IntervalAlarmActionsV2>): CreateScalingPolicyV2Option {
        this['interval_alarm_actions'] = intervalAlarmActions;
        return this;
    }
    public set intervalAlarmActions(intervalAlarmActions: Array<IntervalAlarmActionsV2>  | undefined) {
        this['interval_alarm_actions'] = intervalAlarmActions;
    }
    public get intervalAlarmActions(): Array<IntervalAlarmActionsV2> | undefined {
        return this['interval_alarm_actions'];
    }
    public withCoolDownTime(coolDownTime: number): CreateScalingPolicyV2Option {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
    public withDescription(description: string): CreateScalingPolicyV2Option {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateScalingPolicyV2OptionScalingResourceTypeEnum {
    SCALING_GROUP = 'SCALING_GROUP',
    BANDWIDTH = 'BANDWIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateScalingPolicyV2OptionScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE'
}
