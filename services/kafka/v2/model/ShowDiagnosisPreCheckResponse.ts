import { KafkaDiagnosisCheckEntity } from './KafkaDiagnosisCheckEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisPreCheckResponse extends SdkResponse {
    public body?: Array<KafkaDiagnosisCheckEntity>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<KafkaDiagnosisCheckEntity>): ShowDiagnosisPreCheckResponse {
        this['body'] = body;
        return this;
    }
}