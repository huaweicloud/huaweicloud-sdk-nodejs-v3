import { PhoneJob } from './PhoneJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandPhoneDataVolumeSizeResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<PhoneJob>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ExpandPhoneDataVolumeSizeResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<PhoneJob>): ExpandPhoneDataVolumeSizeResponse {
        this['jobs'] = jobs;
        return this;
    }
}