import { QualificationCertificateResult } from './QualificationCertificateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeQualificationCertificateResponse extends SdkResponse {
    public result?: QualificationCertificateResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: QualificationCertificateResult): RecognizeQualificationCertificateResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeQualificationCertificateResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}