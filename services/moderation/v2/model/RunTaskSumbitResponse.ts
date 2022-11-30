import { TaskSumbitResponseResult } from './TaskSumbitResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunTaskSumbitResponse extends SdkResponse {
    public result?: TaskSumbitResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: TaskSumbitResponseResult): RunTaskSumbitResponse {
        this['result'] = result;
        return this;
    }
}