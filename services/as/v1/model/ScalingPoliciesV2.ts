import { IntervalAlarmActionsV2 } from './IntervalAlarmActionsV2';
import { ScalingPolicyActionV2 } from './ScalingPolicyActionV2';
import { ScalingPolicyV2MetaData } from './ScalingPolicyV2MetaData';
import { ScheduledPolicy } from './ScheduledPolicy';


export class ScalingPoliciesV2 {
    private 'scaling_policy_name'?: string;
    private 'scaling_policy_id'?: string;
    private 'scaling_resource_id'?: string;
    private 'scaling_resource_type'?: ScalingPoliciesV2ScalingResourceTypeEnum | string;
    private 'policy_status'?: ScalingPoliciesV2PolicyStatusEnum | string;
    private 'scaling_policy_type'?: ScalingPoliciesV2ScalingPolicyTypeEnum | string;
    private 'alarm_id'?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'scaling_policy_action'?: ScalingPolicyActionV2;
    private 'interval_alarm_actions'?: Array<IntervalAlarmActionsV2>;
    private 'cool_down_time'?: number;
    private 'create_time'?: Date;
    private 'meta_data'?: ScalingPolicyV2MetaData;
    public description?: string;
    public constructor() { 
    }
    public withScalingPolicyName(scalingPolicyName: string): ScalingPoliciesV2 {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingPolicyId(scalingPolicyId: string): ScalingPoliciesV2 {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withScalingResourceId(scalingResourceId: string): ScalingPoliciesV2 {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withScalingResourceType(scalingResourceType: ScalingPoliciesV2ScalingResourceTypeEnum | string): ScalingPoliciesV2 {
        this['scaling_resource_type'] = scalingResourceType;
        return this;
    }
    public set scalingResourceType(scalingResourceType: ScalingPoliciesV2ScalingResourceTypeEnum | string  | undefined) {
        this['scaling_resource_type'] = scalingResourceType;
    }
    public get scalingResourceType(): ScalingPoliciesV2ScalingResourceTypeEnum | string | undefined {
        return this['scaling_resource_type'];
    }
    public withPolicyStatus(policyStatus: ScalingPoliciesV2PolicyStatusEnum | string): ScalingPoliciesV2 {
        this['policy_status'] = policyStatus;
        return this;
    }
    public set policyStatus(policyStatus: ScalingPoliciesV2PolicyStatusEnum | string  | undefined) {
        this['policy_status'] = policyStatus;
    }
    public get policyStatus(): ScalingPoliciesV2PolicyStatusEnum | string | undefined {
        return this['policy_status'];
    }
    public withScalingPolicyType(scalingPolicyType: ScalingPoliciesV2ScalingPolicyTypeEnum | string): ScalingPoliciesV2 {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: ScalingPoliciesV2ScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): ScalingPoliciesV2ScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withAlarmId(alarmId: string): ScalingPoliciesV2 {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): ScalingPoliciesV2 {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withScalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV2): ScalingPoliciesV2 {
        this['scaling_policy_action'] = scalingPolicyAction;
        return this;
    }
    public set scalingPolicyAction(scalingPolicyAction: ScalingPolicyActionV2  | undefined) {
        this['scaling_policy_action'] = scalingPolicyAction;
    }
    public get scalingPolicyAction(): ScalingPolicyActionV2 | undefined {
        return this['scaling_policy_action'];
    }
    public withIntervalAlarmActions(intervalAlarmActions: Array<IntervalAlarmActionsV2>): ScalingPoliciesV2 {
        this['interval_alarm_actions'] = intervalAlarmActions;
        return this;
    }
    public set intervalAlarmActions(intervalAlarmActions: Array<IntervalAlarmActionsV2>  | undefined) {
        this['interval_alarm_actions'] = intervalAlarmActions;
    }
    public get intervalAlarmActions(): Array<IntervalAlarmActionsV2> | undefined {
        return this['interval_alarm_actions'];
    }
    public withCoolDownTime(coolDownTime: number): ScalingPoliciesV2 {
        this['cool_down_time'] = coolDownTime;
        return this;
    }
    public set coolDownTime(coolDownTime: number  | undefined) {
        this['cool_down_time'] = coolDownTime;
    }
    public get coolDownTime(): number | undefined {
        return this['cool_down_time'];
    }
    public withCreateTime(createTime: Date): ScalingPoliciesV2 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withMetaData(metaData: ScalingPolicyV2MetaData): ScalingPoliciesV2 {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: ScalingPolicyV2MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): ScalingPolicyV2MetaData | undefined {
        return this['meta_data'];
    }
    public withDescription(description: string): ScalingPoliciesV2 {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingPoliciesV2ScalingResourceTypeEnum {
    SCALING_GROUP = 'SCALING_GROUP',
    BANDWIDTH = 'BANDWIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingPoliciesV2PolicyStatusEnum {
    INSERVICE = 'INSERVICE',
    PAUSED = 'PAUSED',
    EXECUTING = 'EXECUTING'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingPoliciesV2ScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE'
}
