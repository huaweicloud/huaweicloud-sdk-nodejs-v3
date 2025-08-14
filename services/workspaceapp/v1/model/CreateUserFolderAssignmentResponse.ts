import { CloudStorageAssignmentCreateInfo } from './CloudStorageAssignmentCreateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserFolderAssignmentResponse extends SdkResponse {
    public items?: Array<CloudStorageAssignmentCreateInfo>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<CloudStorageAssignmentCreateInfo>): CreateUserFolderAssignmentResponse {
        this['items'] = items;
        return this;
    }
}