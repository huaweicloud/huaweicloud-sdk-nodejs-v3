import { AtlasItem } from './AtlasItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAtlasesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AtlasItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAtlasesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AtlasItem>): ListAtlasesResponse {
        this['items'] = items;
        return this;
    }
}