import { GeOIpItem } from './GeOIpItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeoipRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<GeOIpItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListGeoipRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<GeOIpItem>): ListGeoipRuleResponse {
        this['items'] = items;
        return this;
    }
}