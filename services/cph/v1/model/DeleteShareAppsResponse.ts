import { ServerJob } from './ServerJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteShareAppsResponse extends SdkResponse {
    private 'request_id'?: string;
    public jobs?: Array<ServerJob>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): DeleteShareAppsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobs(jobs: Array<ServerJob>): DeleteShareAppsResponse {
        this['jobs'] = jobs;
        return this;
    }
}