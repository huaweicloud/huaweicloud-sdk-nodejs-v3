import { CustomRegexSetItem } from './CustomRegexSetItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomRegexSetResponse extends SdkResponse {
    public total?: number;
    public items?: Array<CustomRegexSetItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCustomRegexSetResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<CustomRegexSetItem>): ListCustomRegexSetResponse {
        this['items'] = items;
        return this;
    }
}