import { ModelInfoForListResp } from './ModelInfoForListResp';
import { ModelPageResp } from './ModelPageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModelsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ModelInfoForListResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListModelsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ModelInfoForListResp>): ListModelsResponse {
        this['items'] = items;
        return this;
    }
}