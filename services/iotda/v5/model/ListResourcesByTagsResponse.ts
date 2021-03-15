import { Page } from './Page';
import { ResourceDTO } from './ResourceDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesByTagsResponse extends SdkResponse {
    public resources?: Array<ResourceDTO>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceDTO>): ListResourcesByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withPage(page: Page): ListResourcesByTagsResponse {
        this['page'] = page;
        return this;
    }
}