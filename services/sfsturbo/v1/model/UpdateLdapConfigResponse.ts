
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLdapConfigResponse extends SdkResponse {
    public jobId?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateLdapConfigResponse {
        this['jobId'] = jobId;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateLdapConfigResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}