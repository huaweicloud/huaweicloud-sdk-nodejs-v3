import { SqlDiagnosisResult } from './SqlDiagnosisResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlDiagnosisResponse extends SdkResponse {
    public results?: Array<SqlDiagnosisResult>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<SqlDiagnosisResult>): ShowSqlDiagnosisResponse {
        this['results'] = results;
        return this;
    }
    public withTotal(total: number): ShowSqlDiagnosisResponse {
        this['total'] = total;
        return this;
    }
}