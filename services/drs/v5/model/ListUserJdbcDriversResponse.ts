import { DriverInfo } from './DriverInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserJdbcDriversResponse extends SdkResponse {
    public count?: number;
    public items?: Array<DriverInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUserJdbcDriversResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<DriverInfo>): ListUserJdbcDriversResponse {
        this['items'] = items;
        return this;
    }
}