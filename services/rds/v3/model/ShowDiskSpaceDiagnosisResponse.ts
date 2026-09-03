import { DiskSpaceDiagnosisResult } from './DiskSpaceDiagnosisResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiskSpaceDiagnosisResponse extends SdkResponse {
    public status?: string;
    public results?: Array<DiskSpaceDiagnosisResult>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowDiskSpaceDiagnosisResponse {
        this['status'] = status;
        return this;
    }
    public withResults(results: Array<DiskSpaceDiagnosisResult>): ShowDiskSpaceDiagnosisResponse {
        this['results'] = results;
        return this;
    }
}