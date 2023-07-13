import { AsyncCommitJobResp } from './AsyncCommitJobResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CommitAsyncJobResponse extends SdkResponse {
    public job?: AsyncCommitJobResp;
    public constructor() { 
        super();
    }
    public withJob(job: AsyncCommitJobResp): CommitAsyncJobResponse {
        this['job'] = job;
        return this;
    }
}