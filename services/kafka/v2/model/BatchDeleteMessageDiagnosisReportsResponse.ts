import { BatchDeleteMessageDiagnosisRespResults } from './BatchDeleteMessageDiagnosisRespResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteMessageDiagnosisReportsResponse extends SdkResponse {
    public results?: Array<BatchDeleteMessageDiagnosisRespResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchDeleteMessageDiagnosisRespResults>): BatchDeleteMessageDiagnosisReportsResponse {
        this['results'] = results;
        return this;
    }
}