
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstancePortResponse extends SdkResponse {
    private 'job_id'?: string;
    public port?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateInstancePortResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withPort(port: number): UpdateInstancePortResponse {
        this['port'] = port;
        return this;
    }
}