import { AppServer } from './AppServer';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServersResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppServer>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListServersResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppServer>): ListServersResponse {
        this['items'] = items;
        return this;
    }
}