import { CreateDesktopRsp } from './CreateDesktopRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDesktopSubResourcesResponse extends SdkResponse {
    private 'job_id'?: string;
    public cbcJobId?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): AddDesktopSubResourcesResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCbcJobId(cbcJobId: string): AddDesktopSubResourcesResponse {
        this['cbcJobId'] = cbcJobId;
        return this;
    }
    public withGetJobEndpoint(getJobEndpoint: string): AddDesktopSubResourcesResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): AddDesktopSubResourcesResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): AddDesktopSubResourcesResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): AddDesktopSubResourcesResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
}