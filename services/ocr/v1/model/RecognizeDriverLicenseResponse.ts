import { DriverLicenseResult } from './DriverLicenseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeDriverLicenseResponse extends SdkResponse {
    public result?: DriverLicenseResult;
    public constructor() { 
        super();
    }
    public withResult(result: DriverLicenseResult): RecognizeDriverLicenseResponse {
        this['result'] = result;
        return this;
    }
}