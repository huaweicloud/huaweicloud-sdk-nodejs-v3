import { LabelBasicDto } from './LabelBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryLabelsResponse extends SdkResponse {
    public body?: Array<LabelBasicDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LabelBasicDto>): ListRepositoryLabelsResponse {
        this['body'] = body;
        return this;
    }
}