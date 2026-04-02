
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOverviewsHostDomainsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<string>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListOverviewsHostDomainsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<string>): ListOverviewsHostDomainsResponse {
        this['items'] = items;
        return this;
    }
}