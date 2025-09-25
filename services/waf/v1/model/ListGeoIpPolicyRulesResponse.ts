import { GeOIpItem } from './GeOIpItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeoIpPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<GeOIpItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListGeoIpPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<GeOIpItem>): ListGeoIpPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}