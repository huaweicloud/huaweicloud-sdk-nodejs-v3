import { EngineDistributionInfo } from './EngineDistributionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDistributionResponse extends SdkResponse {
    public total?: number;
    private 'engine_distribution'?: Array<EngineDistributionInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowInstanceDistributionResponse {
        this['total'] = total;
        return this;
    }
    public withEngineDistribution(engineDistribution: Array<EngineDistributionInfo>): ShowInstanceDistributionResponse {
        this['engine_distribution'] = engineDistribution;
        return this;
    }
    public set engineDistribution(engineDistribution: Array<EngineDistributionInfo>  | undefined) {
        this['engine_distribution'] = engineDistribution;
    }
    public get engineDistribution(): Array<EngineDistributionInfo> | undefined {
        return this['engine_distribution'];
    }
}