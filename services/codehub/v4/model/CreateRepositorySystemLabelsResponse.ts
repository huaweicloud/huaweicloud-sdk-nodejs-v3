import { LabelDetailDto } from './LabelDetailDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRepositorySystemLabelsResponse extends SdkResponse {
    public body?: Array<LabelDetailDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LabelDetailDto>): CreateRepositorySystemLabelsResponse {
        this['body'] = body;
        return this;
    }
}