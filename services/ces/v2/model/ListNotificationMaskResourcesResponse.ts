import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationMaskResourcesResponse extends SdkResponse {
    public resources?: Array<Resource>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resource>): ListNotificationMaskResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withCount(count: number): ListNotificationMaskResourcesResponse {
        this['count'] = count;
        return this;
    }
}