import { ValueListResponseBody } from './ValueListResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListValueListResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ValueListResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListValueListResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ValueListResponseBody>): ListValueListResponse {
        this['items'] = items;
        return this;
    }
}