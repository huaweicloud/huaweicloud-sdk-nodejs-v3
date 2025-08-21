import { BlameDto } from './BlameDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFileBlameLinesResponse extends SdkResponse {
    public body?: Array<BlameDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<BlameDto>): ListFileBlameLinesResponse {
        this['body'] = body;
        return this;
    }
}