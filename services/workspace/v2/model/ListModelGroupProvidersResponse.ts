import { ModelGroupProviderDetailResp } from './ModelGroupProviderDetailResp';
import { ModelPageResp } from './ModelPageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModelGroupProvidersResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ModelGroupProviderDetailResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListModelGroupProvidersResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ModelGroupProviderDetailResp>): ListModelGroupProvidersResponse {
        this['items'] = items;
        return this;
    }
}