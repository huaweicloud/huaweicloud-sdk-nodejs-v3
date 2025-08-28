import { Risks } from './Risks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRiskInfoResponse extends SdkResponse {
    public risks?: Array<Risks>;
    public constructor() { 
        super();
    }
    public withRisks(risks: Array<Risks>): ShowRiskInfoResponse {
        this['risks'] = risks;
        return this;
    }
}