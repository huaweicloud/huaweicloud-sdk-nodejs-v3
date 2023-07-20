import { ScalingConfiguration } from './ScalingConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingConfigsResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_configurations'?: Array<ScalingConfiguration>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingConfigsResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingConfigsResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingConfigsResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingConfigurations(scalingConfigurations: Array<ScalingConfiguration>): ListScalingConfigsResponse {
        this['scaling_configurations'] = scalingConfigurations;
        return this;
    }
    public set scalingConfigurations(scalingConfigurations: Array<ScalingConfiguration>  | undefined) {
        this['scaling_configurations'] = scalingConfigurations;
    }
    public get scalingConfigurations(): Array<ScalingConfiguration> | undefined {
        return this['scaling_configurations'];
    }
}