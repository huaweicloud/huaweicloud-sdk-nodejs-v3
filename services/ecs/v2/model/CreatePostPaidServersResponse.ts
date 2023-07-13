
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostPaidServersResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    public serverIds?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreatePostPaidServersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withServerIds(serverIds: Array<string>): CreatePostPaidServersResponse {
        this['serverIds'] = serverIds;
        return this;
    }
}