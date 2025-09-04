
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditLogPolicyResponse extends SdkResponse {
    public result?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SetAuditLogPolicyResponse {
        this['result'] = result;
        return this;
    }
    public withJobId(jobId: string): SetAuditLogPolicyResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}