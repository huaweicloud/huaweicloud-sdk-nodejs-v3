import { ModelPageResp } from './ModelPageResp';
import { ProviderInfoVO } from './ProviderInfoVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProvidersResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ProviderInfoVO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListProvidersResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ProviderInfoVO>): ListProvidersResponse {
        this['items'] = items;
        return this;
    }
}