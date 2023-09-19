
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class Create2DDigitalHumanVideoResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): Create2DDigitalHumanVideoResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXRequestId(xRequestId: string): Create2DDigitalHumanVideoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}