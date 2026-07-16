import { ServerScaleEvaluation } from './ServerScaleEvaluation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetScaleEvaluationsDevServerResponse extends SdkResponse {
    public evaluations?: Array<ServerScaleEvaluation>;
    public constructor() { 
        super();
    }
    public withEvaluations(evaluations: Array<ServerScaleEvaluation>): GetScaleEvaluationsDevServerResponse {
        this['evaluations'] = evaluations;
        return this;
    }
}