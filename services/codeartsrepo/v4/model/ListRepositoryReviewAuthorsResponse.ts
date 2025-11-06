import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryReviewAuthorsResponse extends SdkResponse {
    public body?: Array<UserBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserBasicDto>): ListRepositoryReviewAuthorsResponse {
        this['body'] = body;
        return this;
    }
}