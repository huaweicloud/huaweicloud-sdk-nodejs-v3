

export class ListScalingInstancesRequest {
    private 'scaling_group_id'?: string;
    private 'life_cycle_state'?: ListScalingInstancesRequestLifeCycleStateEnum | string;
    private 'health_status'?: ListScalingInstancesRequestHealthStatusEnum | string;
    private 'protect_from_scaling_down'?: ListScalingInstancesRequestProtectFromScalingDownEnum | string;
    private 'start_number'?: number;
    public limit?: number;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): ListScalingInstancesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withLifeCycleState(lifeCycleState: ListScalingInstancesRequestLifeCycleStateEnum | string): ListScalingInstancesRequest {
        this['life_cycle_state'] = lifeCycleState;
        return this;
    }
    public set lifeCycleState(lifeCycleState: ListScalingInstancesRequestLifeCycleStateEnum | string  | undefined) {
        this['life_cycle_state'] = lifeCycleState;
    }
    public get lifeCycleState(): ListScalingInstancesRequestLifeCycleStateEnum | string | undefined {
        return this['life_cycle_state'];
    }
    public withHealthStatus(healthStatus: ListScalingInstancesRequestHealthStatusEnum | string): ListScalingInstancesRequest {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: ListScalingInstancesRequestHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): ListScalingInstancesRequestHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
    public withProtectFromScalingDown(protectFromScalingDown: ListScalingInstancesRequestProtectFromScalingDownEnum | string): ListScalingInstancesRequest {
        this['protect_from_scaling_down'] = protectFromScalingDown;
        return this;
    }
    public set protectFromScalingDown(protectFromScalingDown: ListScalingInstancesRequestProtectFromScalingDownEnum | string  | undefined) {
        this['protect_from_scaling_down'] = protectFromScalingDown;
    }
    public get protectFromScalingDown(): ListScalingInstancesRequestProtectFromScalingDownEnum | string | undefined {
        return this['protect_from_scaling_down'];
    }
    public withStartNumber(startNumber: number): ListScalingInstancesRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingInstancesRequestLifeCycleStateEnum {
    INSERVICE = 'INSERVICE',
    PENDING = 'PENDING',
    REMOVING = 'REMOVING',
    PENDING_WAIT = 'PENDING_WAIT',
    REMOVING_WAIT = 'REMOVING_WAIT',
    STANDBY = 'STANDBY',
    ENTERING_STANDBY = 'ENTERING_STANDBY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScalingInstancesRequestHealthStatusEnum {
    INITIALIZING = 'INITIALIZING',
    NORMAL = 'NORMAL',
    ERROR = 'ERROR'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScalingInstancesRequestProtectFromScalingDownEnum {
    TRUE = 'true',
    FALSE = 'false'
}
