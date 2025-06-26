import { App } from './App';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishAppResponse extends SdkResponse {
    public count?: number;
    public items?: Array<App>;
    public constructor() { 
        super();
    }
    public withCount(count: number): PublishAppResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<App>): PublishAppResponse {
        this['items'] = items;
        return this;
    }
}