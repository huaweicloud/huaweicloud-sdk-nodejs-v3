import { StartJobSubmission } from './StartJobSubmission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAndStartRandomClusterJobResponse extends SdkResponse {
    public submissions?: Array<StartJobSubmission>;
    public constructor() { 
        super();
    }
    public withSubmissions(submissions: Array<StartJobSubmission>): CreateAndStartRandomClusterJobResponse {
        this['submissions'] = submissions;
        return this;
    }
}