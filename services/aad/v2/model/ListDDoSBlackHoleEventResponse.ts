import { ListBlackHoleEventRecordItem } from './ListBlackHoleEventRecordItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDDoSBlackHoleEventResponse extends SdkResponse {
    public items?: Array<ListBlackHoleEventRecordItem>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<ListBlackHoleEventRecordItem>): ListDDoSBlackHoleEventResponse {
        this['items'] = items;
        return this;
    }
}