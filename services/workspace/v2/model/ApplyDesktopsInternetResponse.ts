
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyDesktopsInternetResponse extends SdkResponse {
    private 'job_id'?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ApplyDesktopsInternetResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGetJobEndpoint(getJobEndpoint: string): ApplyDesktopsInternetResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): ApplyDesktopsInternetResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): ApplyDesktopsInternetResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): ApplyDesktopsInternetResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
}