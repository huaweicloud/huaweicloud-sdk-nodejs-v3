import { FileDiffDto } from './FileDiffDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommitFileDiffResponse extends SdkResponse {
    public body?: Array<FileDiffDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<FileDiffDto>): ShowCommitFileDiffResponse {
        this['body'] = body;
        return this;
    }
}