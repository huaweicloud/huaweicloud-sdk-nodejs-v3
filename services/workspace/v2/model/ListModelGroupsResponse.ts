import { ModelGroupItemVO } from './ModelGroupItemVO';
import { ModelPageResp } from './ModelPageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModelGroupsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ModelGroupItemVO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListModelGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ModelGroupItemVO>): ListModelGroupsResponse {
        this['items'] = items;
        return this;
    }
}