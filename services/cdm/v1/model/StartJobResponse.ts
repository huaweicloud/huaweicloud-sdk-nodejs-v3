import { StartJobSubmission } from './StartJobSubmission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartJobResponse extends SdkResponse {
    public submissions?: Array<StartJobSubmission>;
    public constructor() { 
        super();
    }
    public withSubmissions(submissions: Array<StartJobSubmission>): StartJobResponse {
        this['submissions'] = submissions;
        return this;
    }
}