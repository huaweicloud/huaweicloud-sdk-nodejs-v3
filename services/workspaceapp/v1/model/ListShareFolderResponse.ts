import { PageResp } from './PageResp';
import { SharePersistentStorageClaim } from './SharePersistentStorageClaim';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListShareFolderResponse extends SdkResponse {
    public count?: number;
    public items?: Array<SharePersistentStorageClaim>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListShareFolderResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<SharePersistentStorageClaim>): ListShareFolderResponse {
        this['items'] = items;
        return this;
    }
}