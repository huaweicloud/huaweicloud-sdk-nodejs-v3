
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateComponentActionResponse extends SdkResponse {
    private 'job_id'?: string;
    public result?: UpdateComponentActionResponseResultEnum | string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateComponentActionResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withResult(result: UpdateComponentActionResponseResultEnum | string): UpdateComponentActionResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateComponentActionResponseResultEnum {
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}
