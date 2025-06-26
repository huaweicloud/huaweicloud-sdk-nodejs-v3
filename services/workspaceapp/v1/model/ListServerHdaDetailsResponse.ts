import { PageResp } from './PageResp';
import { ServerHdaDetails } from './ServerHdaDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerHdaDetailsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ServerHdaDetails>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListServerHdaDetailsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ServerHdaDetails>): ListServerHdaDetailsResponse {
        this['items'] = items;
        return this;
    }
}