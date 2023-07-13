import { CheckTaskJobsItemsBody } from './CheckTaskJobsItemsBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCheckTaskJobsResponse extends SdkResponse {
    public result?: Array<CheckTaskJobsItemsBody>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<CheckTaskJobsItemsBody>): RunCheckTaskJobsResponse {
        this['result'] = result;
        return this;
    }
    public withCount(count: number): RunCheckTaskJobsResponse {
        this['count'] = count;
        return this;
    }
}