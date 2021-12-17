import { MyanmarDriverLicenseResult } from './MyanmarDriverLicenseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMyanmarDriverLicenseResponse extends SdkResponse {
    public result?: MyanmarDriverLicenseResult;
    public constructor() { 
        super();
    }
    public withResult(result: MyanmarDriverLicenseResult): RecognizeMyanmarDriverLicenseResponse {
        this['result'] = result;
        return this;
    }
}