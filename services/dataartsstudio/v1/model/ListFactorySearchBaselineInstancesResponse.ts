import { BaselineInstance } from './BaselineInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactorySearchBaselineInstancesResponse extends SdkResponse {
    public total?: number;
    private 'baseline_instances'?: Array<BaselineInstance>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFactorySearchBaselineInstancesResponse {
        this['total'] = total;
        return this;
    }
    public withBaselineInstances(baselineInstances: Array<BaselineInstance>): ListFactorySearchBaselineInstancesResponse {
        this['baseline_instances'] = baselineInstances;
        return this;
    }
    public set baselineInstances(baselineInstances: Array<BaselineInstance>  | undefined) {
        this['baseline_instances'] = baselineInstances;
    }
    public get baselineInstances(): Array<BaselineInstance> | undefined {
        return this['baseline_instances'];
    }
}