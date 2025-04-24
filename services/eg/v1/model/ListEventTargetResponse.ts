import { CatalogTargetInfo } from './CatalogTargetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventTargetResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<CatalogTargetInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventTargetResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListEventTargetResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<CatalogTargetInfo>): ListEventTargetResponse {
        this['items'] = items;
        return this;
    }
}