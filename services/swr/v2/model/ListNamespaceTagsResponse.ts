import { ProjectTag } from './ProjectTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNamespaceTagsResponse extends SdkResponse {
    public tags?: Array<ProjectTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ProjectTag>): ListNamespaceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}