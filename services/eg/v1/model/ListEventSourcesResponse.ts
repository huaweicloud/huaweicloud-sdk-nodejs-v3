import { CustomizeSourceInfo } from './CustomizeSourceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventSourcesResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<CustomizeSourceInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventSourcesResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListEventSourcesResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<CustomizeSourceInfo>): ListEventSourcesResponse {
        this['items'] = items;
        return this;
    }
}