import { PageResp } from './PageResp';
import { WarehouseApp } from './WarehouseApp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWarehouseAppsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<WarehouseApp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListWarehouseAppsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<WarehouseApp>): ListWarehouseAppsResponse {
        this['items'] = items;
        return this;
    }
}