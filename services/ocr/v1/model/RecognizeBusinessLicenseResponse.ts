import { BusinessLicenseResult } from './BusinessLicenseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeBusinessLicenseResponse extends SdkResponse {
    public result?: BusinessLicenseResult;
    public constructor() { 
        super();
    }
    public withResult(result: BusinessLicenseResult): RecognizeBusinessLicenseResponse {
        this['result'] = result;
        return this;
    }
}