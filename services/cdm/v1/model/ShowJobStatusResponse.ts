import { Submission } from './Submission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobStatusResponse extends SdkResponse {
    public submissions?: Array<Submission>;
    public constructor() { 
        super();
    }
    public withSubmissions(submissions: Array<Submission>): ShowJobStatusResponse {
        this['submissions'] = submissions;
        return this;
    }
}