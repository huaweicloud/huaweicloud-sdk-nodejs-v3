import { StandardResponseResult } from './StandardResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectReleaseFilesResponse extends SdkResponse {
    public result?: StandardResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: StandardResponseResult): ShowProjectReleaseFilesResponse {
        this['result'] = result;
        return this;
    }
}