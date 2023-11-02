import { UpdateItemResp } from './UpdateItemResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpdatableVersionResponse extends SdkResponse {
    public count?: number;
    public items?: Array<UpdateItemResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUpdatableVersionResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<UpdateItemResp>): ListUpdatableVersionResponse {
        this['items'] = items;
        return this;
    }
}