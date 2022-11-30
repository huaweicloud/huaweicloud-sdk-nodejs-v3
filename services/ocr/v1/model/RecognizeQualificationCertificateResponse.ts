import { QualificationCertificateResult } from './QualificationCertificateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeQualificationCertificateResponse extends SdkResponse {
    public result?: QualificationCertificateResult;
    public constructor() { 
        super();
    }
    public withResult(result: QualificationCertificateResult): RecognizeQualificationCertificateResponse {
        this['result'] = result;
        return this;
    }
}