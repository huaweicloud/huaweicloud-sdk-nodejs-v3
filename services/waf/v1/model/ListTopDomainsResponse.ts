import { TopDomainsCountItem } from './TopDomainsCountItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopDomainsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<TopDomainsCountItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopDomainsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<TopDomainsCountItem>): ListTopDomainsResponse {
        this['items'] = items;
        return this;
    }
}