import { RealEstateCertificateResult } from './RealEstateCertificateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeRealEstateCertificateResponse extends SdkResponse {
    public result?: RealEstateCertificateResult;
    public constructor() { 
        super();
    }
    public withResult(result: RealEstateCertificateResult): RecognizeRealEstateCertificateResponse {
        this['result'] = result;
        return this;
    }
}