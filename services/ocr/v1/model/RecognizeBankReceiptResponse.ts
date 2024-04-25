import { BankReceiptResult } from './BankReceiptResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeBankReceiptResponse extends SdkResponse {
    public result?: BankReceiptResult;
    public constructor() { 
        super();
    }
    public withResult(result: BankReceiptResult): RecognizeBankReceiptResponse {
        this['result'] = result;
        return this;
    }
}