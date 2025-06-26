import { PageResp } from './PageResp';
import { PersistentStorageAssignment } from './PersistentStorageAssignment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStorageAssignmentResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PersistentStorageAssignment>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListStorageAssignmentResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PersistentStorageAssignment>): ListStorageAssignmentResponse {
        this['items'] = items;
        return this;
    }
}