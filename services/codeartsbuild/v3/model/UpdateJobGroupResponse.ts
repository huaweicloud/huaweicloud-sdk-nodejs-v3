import { JobGroupResponseBodyResult } from './JobGroupResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateJobGroupResponse extends SdkResponse {
    public result?: Array<JobGroupResponseBodyResult>;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<JobGroupResponseBodyResult>): UpdateJobGroupResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): UpdateJobGroupResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): UpdateJobGroupResponse {
        this['status'] = status;
        return this;
    }
}