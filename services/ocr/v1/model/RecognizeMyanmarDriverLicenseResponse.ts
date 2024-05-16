import { MyanmarDriverLicenseResult } from './MyanmarDriverLicenseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMyanmarDriverLicenseResponse extends SdkResponse {
    public result?: MyanmarDriverLicenseResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: MyanmarDriverLicenseResult): RecognizeMyanmarDriverLicenseResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeMyanmarDriverLicenseResponse {
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