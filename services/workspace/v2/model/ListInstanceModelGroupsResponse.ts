import { InstanceModelGroupItem } from './InstanceModelGroupItem';
import { ModelPageResp } from './ModelPageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceModelGroupsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<InstanceModelGroupItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceModelGroupsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<InstanceModelGroupItem>): ListInstanceModelGroupsResponse {
        this['items'] = items;
        return this;
    }
}