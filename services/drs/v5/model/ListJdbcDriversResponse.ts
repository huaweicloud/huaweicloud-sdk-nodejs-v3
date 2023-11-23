import { DriverInfo } from './DriverInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJdbcDriversResponse extends SdkResponse {
    public count?: number;
    public items?: Array<DriverInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListJdbcDriversResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<DriverInfo>): ListJdbcDriversResponse {
        this['items'] = items;
        return this;
    }
}