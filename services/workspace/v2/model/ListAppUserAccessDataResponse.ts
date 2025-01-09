import { AppUserAccessData } from './AppUserAccessData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppUserAccessDataResponse extends SdkResponse {
    public count?: number;
    public items?: Array<AppUserAccessData>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppUserAccessDataResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<AppUserAccessData>): ListAppUserAccessDataResponse {
        this['items'] = items;
        return this;
    }
}