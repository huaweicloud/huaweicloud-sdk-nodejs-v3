import { BasicRepositoryDto } from './BasicRepositoryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupRepositoriesResponse extends SdkResponse {
    public body?: Array<BasicRepositoryDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BasicRepositoryDto>): ListGroupRepositoriesResponse {
        this['body'] = body;
        return this;
    }
}