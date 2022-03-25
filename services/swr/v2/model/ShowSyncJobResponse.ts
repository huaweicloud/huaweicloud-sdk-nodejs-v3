import { SyncJob } from './SyncJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSyncJobResponse extends SdkResponse {
    public body?: Array<SyncJob>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SyncJob>): ShowSyncJobResponse {
        this['body'] = body;
        return this;
    }
}