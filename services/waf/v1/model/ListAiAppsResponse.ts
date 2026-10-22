import { AiAppItem } from './AiAppItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiAppsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AiAppItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAiAppsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AiAppItem>): ListAiAppsResponse {
        this['items'] = items;
        return this;
    }
}