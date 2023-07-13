import { TagDeleteResponseItem } from './TagDeleteResponseItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteResourceTagResponse extends SdkResponse {
    private 'failed_resources'?: Array<TagDeleteResponseItem> | undefined;
    public constructor() { 
        super();
    }
    public withFailedResources(failedResources: Array<TagDeleteResponseItem>): DeleteResourceTagResponse {
        this['failed_resources'] = failedResources;
        return this;
    }
    public set failedResources(failedResources: Array<TagDeleteResponseItem> | undefined) {
        this['failed_resources'] = failedResources;
    }
    public get failedResources() {
        return this['failed_resources'];
    }
}