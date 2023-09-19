import { SmartLiveJob } from './SmartLiveJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartLiveResponse extends SdkResponse {
    public count?: number;
    private 'smart_live_jobs'?: Array<SmartLiveJob>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSmartLiveResponse {
        this['count'] = count;
        return this;
    }
    public withSmartLiveJobs(smartLiveJobs: Array<SmartLiveJob>): ListSmartLiveResponse {
        this['smart_live_jobs'] = smartLiveJobs;
        return this;
    }
    public set smartLiveJobs(smartLiveJobs: Array<SmartLiveJob>  | undefined) {
        this['smart_live_jobs'] = smartLiveJobs;
    }
    public get smartLiveJobs(): Array<SmartLiveJob> | undefined {
        return this['smart_live_jobs'];
    }
    public withXRequestId(xRequestId: string): ListSmartLiveResponse {
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