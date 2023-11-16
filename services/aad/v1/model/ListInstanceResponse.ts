import { InstanceInfo } from './InstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceResponse extends SdkResponse {
    public count?: number;
    public items?: Array<InstanceInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstanceResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<InstanceInfo>): ListInstanceResponse {
        this['items'] = items;
        return this;
    }
}