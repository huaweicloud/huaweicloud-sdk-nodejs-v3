import { ForkRepositoryDto } from './ForkRepositoryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryForksResponse extends SdkResponse {
    public body?: Array<ForkRepositoryDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ForkRepositoryDto>): ListRepositoryForksResponse {
        this['body'] = body;
        return this;
    }
}