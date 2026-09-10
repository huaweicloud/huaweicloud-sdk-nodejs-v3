import { AttachShareFilesystemResponseBody200Jobs } from './AttachShareFilesystemResponseBody200Jobs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachShareFilesystemResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<AttachShareFilesystemResponseBody200Jobs>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): AttachShareFilesystemResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<AttachShareFilesystemResponseBody200Jobs>): AttachShareFilesystemResponse {
        this['jobs'] = jobs;
        return this;
    }
}