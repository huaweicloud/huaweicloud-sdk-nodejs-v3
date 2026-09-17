import { FullSqlSampleInfo } from './FullSqlSampleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFullSqlSampleResponse extends SdkResponse {
    public sample?: FullSqlSampleInfo;
    public constructor() { 
        super();
    }
    public withSample(sample: FullSqlSampleInfo): ShowFullSqlSampleResponse {
        this['sample'] = sample;
        return this;
    }
}