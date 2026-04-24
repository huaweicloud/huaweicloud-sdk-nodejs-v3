import { BaselineV2 } from './BaselineV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSearchFactoryBaselinesResponse extends SdkResponse {
    public baselines?: Array<BaselineV2>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withBaselines(baselines: Array<BaselineV2>): ListSearchFactoryBaselinesResponse {
        this['baselines'] = baselines;
        return this;
    }
    public withTotal(total: number): ListSearchFactoryBaselinesResponse {
        this['total'] = total;
        return this;
    }
}