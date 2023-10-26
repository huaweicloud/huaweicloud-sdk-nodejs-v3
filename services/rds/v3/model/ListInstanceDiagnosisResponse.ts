import { DiagnosisItemResult } from './DiagnosisItemResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceDiagnosisResponse extends SdkResponse {
    public diagnosis?: Array<DiagnosisItemResult>;
    public constructor() { 
        super();
    }
    public withDiagnosis(diagnosis: Array<DiagnosisItemResult>): ListInstanceDiagnosisResponse {
        this['diagnosis'] = diagnosis;
        return this;
    }
}