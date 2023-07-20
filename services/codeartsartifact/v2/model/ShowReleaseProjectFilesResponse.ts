import { StandardResponseResult } from './StandardResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReleaseProjectFilesResponse extends SdkResponse {
    public result?: StandardResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: StandardResponseResult): ShowReleaseProjectFilesResponse {
        this['result'] = result;
        return this;
    }
}