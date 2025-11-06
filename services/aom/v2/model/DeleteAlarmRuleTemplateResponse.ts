import { DeleteAlarmRuleTemplateItemResult } from './DeleteAlarmRuleTemplateItemResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAlarmRuleTemplateResponse extends SdkResponse {
    public resources?: Array<DeleteAlarmRuleTemplateItemResult>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<DeleteAlarmRuleTemplateItemResult>): DeleteAlarmRuleTemplateResponse {
        this['resources'] = resources;
        return this;
    }
}