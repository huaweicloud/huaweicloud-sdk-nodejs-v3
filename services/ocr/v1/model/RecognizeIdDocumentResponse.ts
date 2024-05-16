import { IdDocumentItem } from './IdDocumentItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeIdDocumentResponse extends SdkResponse {
    public result?: IdDocumentItem;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: IdDocumentItem): RecognizeIdDocumentResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeIdDocumentResponse {
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