import { CustomizeSchemaVersionItemInfo } from './CustomizeSchemaVersionItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventSchemaVersionsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<CustomizeSchemaVersionItemInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventSchemaVersionsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListEventSchemaVersionsResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<CustomizeSchemaVersionItemInfo>): ListEventSchemaVersionsResponse {
        this['items'] = items;
        return this;
    }
}