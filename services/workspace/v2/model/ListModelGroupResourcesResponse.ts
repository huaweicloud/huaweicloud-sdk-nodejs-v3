import { ModelGroupResourceItemResp } from './ModelGroupResourceItemResp';
import { ModelPageResp } from './ModelPageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModelGroupResourcesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ModelGroupResourceItemResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListModelGroupResourcesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ModelGroupResourceItemResp>): ListModelGroupResourcesResponse {
        this['items'] = items;
        return this;
    }
}