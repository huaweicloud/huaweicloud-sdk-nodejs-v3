import { App } from './App';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublishedAppResponse extends SdkResponse {
    public count?: number;
    public items?: Array<App>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPublishedAppResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<App>): ListPublishedAppResponse {
        this['items'] = items;
        return this;
    }
}