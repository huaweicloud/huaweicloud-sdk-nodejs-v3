import { PageResp } from './PageResp';
import { Sfs3Storage } from './Sfs3Storage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSfs3StorageResponse extends SdkResponse {
    public count?: number;
    public items?: Array<Sfs3Storage>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSfs3StorageResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<Sfs3Storage>): ListSfs3StorageResponse {
        this['items'] = items;
        return this;
    }
}