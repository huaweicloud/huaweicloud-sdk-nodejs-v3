import { RepositoryProtectedTagDto } from './RepositoryProtectedTagDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateProtectedTagsResponse extends SdkResponse {
    public body?: Array<RepositoryProtectedTagDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryProtectedTagDto>): BatchCreateProtectedTagsResponse {
        this['body'] = body;
        return this;
    }
}