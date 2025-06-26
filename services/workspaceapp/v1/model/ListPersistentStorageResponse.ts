import { PageResp } from './PageResp';
import { PersistentStorage } from './PersistentStorage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPersistentStorageResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PersistentStorage>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPersistentStorageResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PersistentStorage>): ListPersistentStorageResponse {
        this['items'] = items;
        return this;
    }
}