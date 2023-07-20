
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchSslResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'ssl_option'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): SwitchSslResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withSslOption(sslOption: string): SwitchSslResponse {
        this['ssl_option'] = sslOption;
        return this;
    }
    public set sslOption(sslOption: string  | undefined) {
        this['ssl_option'] = sslOption;
    }
    public get sslOption(): string | undefined {
        return this['ssl_option'];
    }
}