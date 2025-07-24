import { TestPlanJournalList } from './TestPlanJournalList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPlanJournalsResponse extends SdkResponse {
    public body?: Array<TestPlanJournalList>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TestPlanJournalList>): ShowPlanJournalsResponse {
        this['body'] = body;
        return this;
    }
}