import { InstanceEngineDistributionListEngineDistribution } from './InstanceEngineDistributionListEngineDistribution';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceDistributionResponse extends SdkResponse {
    public total?: number;
    private 'engine_distribution'?: Array<InstanceEngineDistributionListEngineDistribution>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceDistributionResponse {
        this['total'] = total;
        return this;
    }
    public withEngineDistribution(engineDistribution: Array<InstanceEngineDistributionListEngineDistribution>): ListInstanceDistributionResponse {
        this['engine_distribution'] = engineDistribution;
        return this;
    }
    public set engineDistribution(engineDistribution: Array<InstanceEngineDistributionListEngineDistribution>  | undefined) {
        this['engine_distribution'] = engineDistribution;
    }
    public get engineDistribution(): Array<InstanceEngineDistributionListEngineDistribution> | undefined {
        return this['engine_distribution'];
    }
}