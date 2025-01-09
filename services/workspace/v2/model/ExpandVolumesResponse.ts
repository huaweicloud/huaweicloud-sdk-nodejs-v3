
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandVolumesResponse extends SdkResponse {
    private 'job_id'?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ExpandVolumesResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGetJobEndpoint(getJobEndpoint: string): ExpandVolumesResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): ExpandVolumesResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): ExpandVolumesResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): ExpandVolumesResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
}