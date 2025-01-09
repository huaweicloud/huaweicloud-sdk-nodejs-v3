import { Application } from './Application';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<Application>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<Application>): ListAppsResponse {
        this['items'] = items;
        return this;
    }
}