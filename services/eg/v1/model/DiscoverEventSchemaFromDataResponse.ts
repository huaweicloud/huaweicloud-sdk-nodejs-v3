import { CustomizeSchemaItemInfo } from './CustomizeSchemaItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DiscoverEventSchemaFromDataResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<CustomizeSchemaItemInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): DiscoverEventSchemaFromDataResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): DiscoverEventSchemaFromDataResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<CustomizeSchemaItemInfo>): DiscoverEventSchemaFromDataResponse {
        this['items'] = items;
        return this;
    }
}