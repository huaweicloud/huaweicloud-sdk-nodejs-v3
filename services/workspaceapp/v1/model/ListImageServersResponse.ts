import { ImageServer } from './ImageServer';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageServersResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ImageServer>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListImageServersResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ImageServer>): ListImageServersResponse {
        this['items'] = items;
        return this;
    }
}