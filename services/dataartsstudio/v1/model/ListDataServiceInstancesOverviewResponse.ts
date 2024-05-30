import { InstanceOverviewDTO } from './InstanceOverviewDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataServiceInstancesOverviewResponse extends SdkResponse {
    public total?: number;
    private 'scale_down'?: boolean;
    private 'scale_out'?: boolean;
    public instances?: Array<InstanceOverviewDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDataServiceInstancesOverviewResponse {
        this['total'] = total;
        return this;
    }
    public withScaleDown(scaleDown: boolean): ListDataServiceInstancesOverviewResponse {
        this['scale_down'] = scaleDown;
        return this;
    }
    public set scaleDown(scaleDown: boolean  | undefined) {
        this['scale_down'] = scaleDown;
    }
    public get scaleDown(): boolean | undefined {
        return this['scale_down'];
    }
    public withScaleOut(scaleOut: boolean): ListDataServiceInstancesOverviewResponse {
        this['scale_out'] = scaleOut;
        return this;
    }
    public set scaleOut(scaleOut: boolean  | undefined) {
        this['scale_out'] = scaleOut;
    }
    public get scaleOut(): boolean | undefined {
        return this['scale_out'];
    }
    public withInstances(instances: Array<InstanceOverviewDTO>): ListDataServiceInstancesOverviewResponse {
        this['instances'] = instances;
        return this;
    }
}