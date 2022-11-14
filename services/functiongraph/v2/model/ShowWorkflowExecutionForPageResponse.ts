import { FlowExecutionBriefV2 } from './FlowExecutionBriefV2';
import { Pager } from './Pager';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowExecutionForPageResponse extends SdkResponse {
    public pager?: Pager;
    public hisRecords?: FlowExecutionBriefV2;
    public constructor() { 
        super();
    }
    public withPager(pager: Pager): ShowWorkflowExecutionForPageResponse {
        this['pager'] = pager;
        return this;
    }
    public withHisRecords(hisRecords: FlowExecutionBriefV2): ShowWorkflowExecutionForPageResponse {
        this['hisRecords'] = hisRecords;
        return this;
    }
}