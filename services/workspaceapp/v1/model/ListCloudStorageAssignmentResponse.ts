import { CloudStorageAssignment } from './CloudStorageAssignment';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudStorageAssignmentResponse extends SdkResponse {
    public count?: number;
    public items?: Array<CloudStorageAssignment>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCloudStorageAssignmentResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<CloudStorageAssignment>): ListCloudStorageAssignmentResponse {
        this['items'] = items;
        return this;
    }
}