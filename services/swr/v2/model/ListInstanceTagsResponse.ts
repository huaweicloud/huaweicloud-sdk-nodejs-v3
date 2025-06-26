import { RepositoryTag } from './RepositoryTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<RepositoryTag>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<RepositoryTag>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withTotal(total: number): ListInstanceTagsResponse {
        this['total'] = total;
        return this;
    }
}