
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSslSwitchResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'instance_id'?: string;
    public result?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateSslSwitchResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withInstanceId(instanceId: string): UpdateSslSwitchResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withResult(result: string): UpdateSslSwitchResponse {
        this['result'] = result;
        return this;
    }
}