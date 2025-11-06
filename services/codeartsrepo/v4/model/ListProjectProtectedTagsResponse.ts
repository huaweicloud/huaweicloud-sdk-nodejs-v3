import { ProjectProtectedTagPo } from './ProjectProtectedTagPo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectProtectedTagsResponse extends SdkResponse {
    public body?: Array<ProjectProtectedTagPo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectProtectedTagPo>): ListProjectProtectedTagsResponse {
        this['body'] = body;
        return this;
    }
}