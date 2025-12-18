import { V2Job } from './V2Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotJobsResponse extends SdkResponse {
    public body?: Array<V2Job>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<V2Job>): ListAutopilotJobsResponse {
        this['body'] = body;
        return this;
    }
}