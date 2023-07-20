import { ScalingGroupInstance } from './ScalingGroupInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingInstancesResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_group_instances'?: Array<ScalingGroupInstance>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingInstancesResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingInstancesResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingInstancesResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingGroupInstances(scalingGroupInstances: Array<ScalingGroupInstance>): ListScalingInstancesResponse {
        this['scaling_group_instances'] = scalingGroupInstances;
        return this;
    }
    public set scalingGroupInstances(scalingGroupInstances: Array<ScalingGroupInstance>  | undefined) {
        this['scaling_group_instances'] = scalingGroupInstances;
    }
    public get scalingGroupInstances(): Array<ScalingGroupInstance> | undefined {
        return this['scaling_group_instances'];
    }
}