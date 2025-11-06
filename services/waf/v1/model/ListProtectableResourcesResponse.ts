import { ProtectableResources } from './ProtectableResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectableResourcesResponse extends SdkResponse {
    public items?: Array<ProtectableResources>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<ProtectableResources>): ListProtectableResourcesResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ListProtectableResourcesResponse {
        this['total'] = total;
        return this;
    }
}