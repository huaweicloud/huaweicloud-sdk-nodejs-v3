import { TollInvoiceResult } from './TollInvoiceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeTollInvoiceResponse extends SdkResponse {
    public result?: TollInvoiceResult;
    public constructor() { 
        super();
    }
    public withResult(result: TollInvoiceResult): RecognizeTollInvoiceResponse {
        this['result'] = result;
        return this;
    }
}