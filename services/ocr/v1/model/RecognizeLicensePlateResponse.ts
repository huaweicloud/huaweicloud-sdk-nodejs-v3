import { LicensePlateResult } from './LicensePlateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeLicensePlateResponse extends SdkResponse {
    public result?: Array<LicensePlateResult>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<LicensePlateResult>): RecognizeLicensePlateResponse {
        this['result'] = result;
        return this;
    }
}