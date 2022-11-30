import { SyncRepo } from './SyncRepo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageAutoSyncReposDetailsResponse extends SdkResponse {
    public body?: Array<SyncRepo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SyncRepo>): ListImageAutoSyncReposDetailsResponse {
        this['body'] = body;
        return this;
    }
}