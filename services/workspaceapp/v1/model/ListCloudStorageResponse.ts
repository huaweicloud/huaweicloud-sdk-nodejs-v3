import { CloudStorage } from './CloudStorage';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudStorageResponse extends SdkResponse {
    public count?: number;
    public items?: Array<CloudStorage>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCloudStorageResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<CloudStorage>): ListCloudStorageResponse {
        this['items'] = items;
        return this;
    }
}