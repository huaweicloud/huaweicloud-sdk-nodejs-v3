
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyInstanceSslConfigResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'tls_mode'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ModifyInstanceSslConfigResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withTlsMode(tlsMode: string): ModifyInstanceSslConfigResponse {
        this['tls_mode'] = tlsMode;
        return this;
    }
    public set tlsMode(tlsMode: string  | undefined) {
        this['tls_mode'] = tlsMode;
    }
    public get tlsMode(): string | undefined {
        return this['tls_mode'];
    }
}