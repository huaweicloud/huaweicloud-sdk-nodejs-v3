import { CustomRegexItem } from './CustomRegexItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomRegexResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CustomRegexItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCustomRegexResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CustomRegexItem>): ListCustomRegexResponse {
        this['items'] = items;
        return this;
    }
}