import { PageResp } from './PageResp';
import { SessionInfo } from './SessionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<SessionInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSessionsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<SessionInfo>): ListSessionsResponse {
        this['items'] = items;
        return this;
    }
}