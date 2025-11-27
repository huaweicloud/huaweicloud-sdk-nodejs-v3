import { ConfigSetResponse } from './ConfigSetResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigSetsResponse extends SdkResponse {
    public items?: Array<ConfigSetResponse>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<ConfigSetResponse>): ListConfigSetsResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ListConfigSetsResponse {
        this['total'] = total;
        return this;
    }
}