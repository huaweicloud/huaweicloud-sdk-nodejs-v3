
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeInvoiceVerificationResponse extends SdkResponse {
    public result?: object;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeInvoiceVerificationResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeInvoiceVerificationResponse {
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