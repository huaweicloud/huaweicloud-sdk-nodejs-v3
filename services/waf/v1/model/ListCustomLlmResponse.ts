import { CustomLlmItem } from './CustomLlmItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomLlmResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CustomLlmItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCustomLlmResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CustomLlmItem>): ListCustomLlmResponse {
        this['items'] = items;
        return this;
    }
}