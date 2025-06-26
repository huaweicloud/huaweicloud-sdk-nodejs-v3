import { AppConnectionInfo } from './AppConnectionInfo';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppConnectionResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppConnectionInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppConnectionResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppConnectionInfo>): ListAppConnectionResponse {
        this['items'] = items;
        return this;
    }
}