import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListP2cVpnGatewayJobsResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<Job>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListP2cVpnGatewayJobsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<Job>): ListP2cVpnGatewayJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}