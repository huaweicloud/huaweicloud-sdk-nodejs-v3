import { ValidateRepoNameResultDto } from './ValidateRepoNameResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchValidateRepoNamesResponse extends SdkResponse {
    public body?: Array<ValidateRepoNameResultDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ValidateRepoNameResultDto>): BatchValidateRepoNamesResponse {
        this['body'] = body;
        return this;
    }
}