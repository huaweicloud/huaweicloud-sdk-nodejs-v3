
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeP2cVpnGatewayResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpgradeP2cVpnGatewayResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobId(jobId: string): UpgradeP2cVpnGatewayResponse {
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