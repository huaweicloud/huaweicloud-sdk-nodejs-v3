import { IntervalAlarmActionsV2 } from './IntervalAlarmActionsV2';
import { ScalingPolicyActionV2 } from './ScalingPolicyActionV2';
import { ScheduledPolicy } from './ScheduledPolicy';


export class UpdateScalingV2PolicyOption {
    private 'scaling_policy_name'?: string;
    private 'scaling_resource_id'?: string;
    private 'scaling_resource_type'?: UpdateScalingV2PolicyOptionScalingResourceTypeEnum | string;
    private 'scaling_policy_type'?: UpdateScalingV2PolicyOptionScalingPolicyTypeEnum | string;
    private 'alarm_id'?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'scaling_policy_action'?: ScalingPolicyActionV2;
    private 'interval_alarm_actions'?: Array<IntervalAlarmActionsV2>;
    private 'cool_down_time'?: number;
    public description?: string;
    public constructor() { 
    }
    public withScalingPolicyName(scalingPolicyName: string): UpdateScalingV2PolicyOption {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingResourceId(scalingResourceId: string): UpdateScalingV2PolicyOption {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withScalingResourceType(scalingResourceType: UpdateScalingV2PolicyOptionScalingResourceTypeEnum | string): UpdateScalingV2PolicyOption {
        this['scaling_resource_type'] = scalingResourceType;
        return this;
    }
    public set scalingResourceType(scalingResourceType: UpdateScalingV2PolicyOptionScalingResourceTypeEnum | string  | undefined) {
        this['scaling_resource_type'] = scalingResourceType;
    }
    public get scalingResourceType(): UpdateScalingV2PolicyOptionScalingResourceTypeEnum | string | undefined {
        return this['scaling_resource_type'];
    }
    public withScalingPolicyType(scalingPolicyType: UpdateScalingV2PolicyOptionScalingPolicyTypeEnum | string): UpdateScalingV2PolicyOption {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: UpdateScalingV2PolicyOptionScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): UpdateScalingV2PolicyOptionScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withAlarmId(alarmId: string): UpdateScalingV2PolicyOption {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): UpdateScalingV2PolicyOption {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withScalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV2): UpdateScalingV2PolicyOption {
        this['scaling_policy_action'] = scalingPolicyAction;
        return this;
    }
    public set scalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV2  | undefined) {
        this['scaling_policy_action'] = scalingPolicyAction;
    }
    public get scalingPolicyAction(): ScalingPolicyActionV2 | undefined {
        return this['scaling_policy_action'];
    }
    public withIntervalAlarmActions(intervalAlarmActions: Array<IntervalAlarmActionsV2>): UpdateScalingV2PolicyOption {
        this['interval_alarm_actions'] = intervalAlarmActions;
        return this;
    }
    public set intervalAlarmActions(intervalAlarmActions: Array<IntervalAlarmActionsV2>  | undefined) {
        this['interval_alarm_actions'] = intervalAlarmActions;
    }
    public get intervalAlarmActions(): Array<IntervalAlarmActionsV2> | undefined {
        return this['interval_alarm_actions'];
    }
    public withCoolDownTime(coolDownTime: number): UpdateScalingV2PolicyOption {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
    public withDescription(description: string): UpdateScalingV2PolicyOption {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateScalingV2PolicyOptionScalingResourceTypeEnum {
    SCALING_GROUP = 'SCALING_GROUP',
    BANDWIDTH = 'BANDWIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateScalingV2PolicyOptionScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE',
    INTERVAL_ALARM = 'INTERVAL_ALARM'
}
