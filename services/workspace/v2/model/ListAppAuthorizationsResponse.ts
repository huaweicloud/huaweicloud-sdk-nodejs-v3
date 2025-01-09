import { AccountInfo } from './AccountInfo';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppAuthorizationsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AccountInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppAuthorizationsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AccountInfo>): ListAppAuthorizationsResponse {
        this['items'] = items;
        return this;
    }
}