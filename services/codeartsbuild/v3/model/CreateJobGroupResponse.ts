import { JobGroupResponseBodyResult } from './JobGroupResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateJobGroupResponse extends SdkResponse {
    public result?: Array<JobGroupResponseBodyResult>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<JobGroupResponseBodyResult>): CreateJobGroupResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): CreateJobGroupResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): CreateJobGroupResponse {
        this['status'] = status;
        return this;
    }
}