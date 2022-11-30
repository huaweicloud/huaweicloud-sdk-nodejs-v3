import { VatInvoiceResult } from './VatInvoiceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeVatInvoiceResponse extends SdkResponse {
    public result?: VatInvoiceResult;
    public constructor() { 
        super();
    }
    public withResult(result: VatInvoiceResult): RecognizeVatInvoiceResponse {
        this['result'] = result;
        return this;
    }
}