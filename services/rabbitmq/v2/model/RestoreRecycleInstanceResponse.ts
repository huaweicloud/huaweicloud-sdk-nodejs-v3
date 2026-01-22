import { InstanceResumeResult } from './InstanceResumeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreRecycleInstanceResponse extends SdkResponse {
    public results?: Array<InstanceResumeResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<InstanceResumeResult>): RestoreRecycleInstanceResponse {
        this['results'] = results;
        return this;
    }
}