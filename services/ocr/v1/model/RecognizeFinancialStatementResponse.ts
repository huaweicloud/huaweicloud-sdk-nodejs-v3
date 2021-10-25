import { FinancialStatementResult } from './FinancialStatementResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeFinancialStatementResponse extends SdkResponse {
    public result?: FinancialStatementResult;
    public constructor() { 
        super();
    }
    public withResult(result: FinancialStatementResult): RecognizeFinancialStatementResponse {
        this['result'] = result;
        return this;
    }
}