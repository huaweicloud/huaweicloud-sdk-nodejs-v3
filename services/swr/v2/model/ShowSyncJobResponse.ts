import { SyncJob } from './SyncJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSyncJobResponse extends SdkResponse {
    public body?: Array<SyncJob>;
    private 'Content-Range'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SyncJob>): ShowSyncJobResponse {
        this['body'] = body;
        return this;
    }
    public withContentRange(contentRange: string): ShowSyncJobResponse {
        this['Content-Range'] = contentRange;
        return this;
    }
    public set contentRange(contentRange: string | undefined) {
        this['Content-Range'] = contentRange;
    }
    public get contentRange() {
        return this['Content-Range'];
    }
}