import { MvsInvoiceResult } from './MvsInvoiceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMvsInvoiceResponse extends SdkResponse {
    public result?: MvsInvoiceResult;
    public constructor() { 
        super();
    }
    public withResult(result: MvsInvoiceResult): RecognizeMvsInvoiceResponse {
        this['result'] = result;
        return this;
    }
}