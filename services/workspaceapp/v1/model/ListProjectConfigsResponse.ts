import { PageResp } from './PageResp';
import { ProjectConfig } from './ProjectConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectConfigsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ProjectConfig>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListProjectConfigsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ProjectConfig>): ListProjectConfigsResponse {
        this['items'] = items;
        return this;
    }
}