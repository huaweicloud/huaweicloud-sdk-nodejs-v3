import { CustomAnswersItem } from './CustomAnswersItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomAnswersResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CustomAnswersItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCustomAnswersResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CustomAnswersItem>): ListCustomAnswersResponse {
        this['items'] = items;
        return this;
    }
}