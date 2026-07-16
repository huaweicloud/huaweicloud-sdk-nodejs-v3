import { ValidateAuthResults } from './ValidateAuthResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateAuthorizationResponse extends SdkResponse {
    public results?: Array<ValidateAuthResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ValidateAuthResults>): ValidateAuthorizationResponse {
        this['results'] = results;
        return this;
    }
}