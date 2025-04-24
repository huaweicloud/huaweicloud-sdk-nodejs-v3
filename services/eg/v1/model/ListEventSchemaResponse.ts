import { CustomizeSchemaItemInfo } from './CustomizeSchemaItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventSchemaResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<CustomizeSchemaItemInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventSchemaResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListEventSchemaResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<CustomizeSchemaItemInfo>): ListEventSchemaResponse {
        this['items'] = items;
        return this;
    }
}