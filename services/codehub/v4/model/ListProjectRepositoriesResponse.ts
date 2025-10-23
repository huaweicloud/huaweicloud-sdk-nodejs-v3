import { BasicRepositoryDto } from './BasicRepositoryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectRepositoriesResponse extends SdkResponse {
    public body?: Array<BasicRepositoryDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BasicRepositoryDto>): ListProjectRepositoriesResponse {
        this['body'] = body;
        return this;
    }
}