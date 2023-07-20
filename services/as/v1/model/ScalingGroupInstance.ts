

export class ScalingGroupInstance {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'scaling_group_id'?: string;
    private 'scaling_group_name'?: string;
    private 'life_cycle_state'?: ScalingGroupInstanceLifeCycleStateEnum | string;
    private 'health_status'?: ScalingGroupInstanceHealthStatusEnum | string;
    private 'scaling_configuration_name'?: string;
    private 'scaling_configuration_id'?: string;
    private 'create_time'?: Date;
    private 'protect_from_scaling_down'?: boolean;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ScalingGroupInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScalingGroupInstance {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withScalingGroupId(scalingGroupId: string): ScalingGroupInstance {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScalingGroupName(scalingGroupName: string): ScalingGroupInstance {
        this['scaling_group_name'] = scalingGroupName;
        return this;
    }
    public set scalingGroupName(scalingGroupName: string  | undefined) {
        this['scaling_group_name'] = scalingGroupName;
    }
    public get scalingGroupName(): string | undefined {
        return this['scaling_group_name'];
    }
    public withLifeCycleState(lifeCycleState: ScalingGroupInstanceLifeCycleStateEnum | string): ScalingGroupInstance {
        this['life_cycle_state'] = lifeCycleState;
        return this;
    }
    public set lifeCycleState(lifeCycleState: ScalingGroupInstanceLifeCycleStateEnum | string  | undefined) {
        this['life_cycle_state'] = lifeCycleState;
    }
    public get lifeCycleState(): ScalingGroupInstanceLifeCycleStateEnum | string | undefined {
        return this['life_cycle_state'];
    }
    public withHealthStatus(healthStatus: ScalingGroupInstanceHealthStatusEnum | string): ScalingGroupInstance {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: ScalingGroupInstanceHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): ScalingGroupInstanceHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
    public withScalingConfigurationName(scalingConfigurationName: string): ScalingGroupInstance {
        this['scaling_configuration_name'] = scalingConfigurationName;
        return this;
    }
    public set scalingConfigurationName(scalingConfigurationName: string  | undefined) {
        this['scaling_configuration_name'] = scalingConfigurationName;
    }
    public get scalingConfigurationName(): string | undefined {
        return this['scaling_configuration_name'];
    }
    public withScalingConfigurationId(scalingConfigurationId: string): ScalingGroupInstance {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
    public withCreateTime(createTime: Date): ScalingGroupInstance {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withProtectFromScalingDown(protectFromScalingDown: boolean): ScalingGroupInstance {
        this['protect_from_scaling_down'] = protectFromScalingDown;
        return this;
    }
    public set protectFromScalingDown(protectFromScalingDown: boolean  | undefined) {
        this['protect_from_scaling_down'] = protectFromScalingDown;
    }
    public get protectFromScalingDown(): boolean | undefined {
        return this['protect_from_scaling_down'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingGroupInstanceLifeCycleStateEnum {
    INSERVICE = 'INSERVICE',
    PENDING = 'PENDING',
    REMOVING = 'REMOVING',
    PENDING_WAIT = 'PENDING_WAIT',
    REMOVING_WAIT = 'REMOVING_WAIT'
}
/**
    * @export
    * @enum {string}
    */
export enum ScalingGroupInstanceHealthStatusEnum {
    NORMAL = 'NORMAL',
    ERROR = 'ERROR',
    INITAILIZING = 'INITAILIZING'
}
