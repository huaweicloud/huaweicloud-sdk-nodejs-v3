import { StatisticSeverityV2 } from './StatisticSeverityV2';
import { StatisticStatusV2 } from './StatisticStatusV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDefectsStatisticResponse extends SdkResponse {
    public severity?: StatisticSeverityV2;
    public status?: StatisticStatusV2;
    public constructor() { 
        super();
    }
    public withSeverity(severity: StatisticSeverityV2): ShowTaskDefectsStatisticResponse {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: StatisticStatusV2): ShowTaskDefectsStatisticResponse {
        this['status'] = status;
        return this;
    }
}