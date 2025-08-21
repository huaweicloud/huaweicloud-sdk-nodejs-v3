import { RepositorySimplestDto } from './RepositorySimplestDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCurrentUserRepositoriesResponse extends SdkResponse {
    public body?: Array<RepositorySimplestDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositorySimplestDto>): ListCurrentUserRepositoriesResponse {
        this['body'] = body;
        return this;
    }
}