import { AppGroup } from './AppGroup';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppGroupResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppGroup>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppGroupResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppGroup>): ListAppGroupResponse {
        this['items'] = items;
        return this;
    }
}