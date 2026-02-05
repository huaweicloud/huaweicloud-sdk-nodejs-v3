import { ChangeCloudStorageAssignmentInfo } from './ChangeCloudStorageAssignmentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeClusterResponse extends SdkResponse {
    public items?: Array<ChangeCloudStorageAssignmentInfo>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<ChangeCloudStorageAssignmentInfo>): ChangeClusterResponse {
        this['items'] = items;
        return this;
    }
}