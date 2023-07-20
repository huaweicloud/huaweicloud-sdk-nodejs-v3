import { TagCreateResponseItem } from './TagCreateResponseItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateResourceTagResponse extends SdkResponse {
    private 'failed_resources'?: Array<TagCreateResponseItem>;
    public constructor() { 
        super();
    }
    public withFailedResources(failedResources: Array<TagCreateResponseItem>): CreateResourceTagResponse {
        this['failed_resources'] = failedResources;
        return this;
    }
    public set failedResources(failedResources: Array<TagCreateResponseItem>  | undefined) {
        this['failed_resources'] = failedResources;
    }
    public get failedResources(): Array<TagCreateResponseItem> | undefined {
        return this['failed_resources'];
    }
}