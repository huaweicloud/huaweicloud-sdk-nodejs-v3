import { TaxiInvoiceResult } from './TaxiInvoiceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeTaxiInvoiceResponse extends SdkResponse {
    public result?: TaxiInvoiceResult;
    public constructor() { 
        super();
    }
    public withResult(result: TaxiInvoiceResult): RecognizeTaxiInvoiceResponse {
        this['result'] = result;
        return this;
    }
}