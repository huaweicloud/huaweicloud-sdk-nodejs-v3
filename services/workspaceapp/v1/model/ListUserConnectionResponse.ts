import { PageResp } from './PageResp';
import { UserConnectionInfo } from './UserConnectionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserConnectionResponse extends SdkResponse {
    public count?: number;
    public items?: Array<UserConnectionInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUserConnectionResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<UserConnectionInfo>): ListUserConnectionResponse {
        this['items'] = items;
        return this;
    }
}