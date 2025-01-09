import { AppInstallJob } from './AppInstallJob';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppInstallJob>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListJobsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppInstallJob>): ListJobsResponse {
        this['items'] = items;
        return this;
    }
}