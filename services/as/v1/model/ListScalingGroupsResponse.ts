import { ScalingGroups } from './ScalingGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingGroupsResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_groups'?: Array<ScalingGroups>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingGroupsResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingGroupsResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingGroupsResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingGroups(scalingGroups: Array<ScalingGroups>): ListScalingGroupsResponse {
        this['scaling_groups'] = scalingGroups;
        return this;
    }
    public set scalingGroups(scalingGroups: Array<ScalingGroups>  | undefined) {
        this['scaling_groups'] = scalingGroups;
    }
    public get scalingGroups(): Array<ScalingGroups> | undefined {
        return this['scaling_groups'];
    }
}