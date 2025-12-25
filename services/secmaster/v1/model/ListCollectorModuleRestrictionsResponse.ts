import { ShowTemplateFields } from './ShowTemplateFields';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorModuleRestrictionsResponse extends SdkResponse {
    public body?: Array<ShowTemplateFields>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowTemplateFields>): ListCollectorModuleRestrictionsResponse {
        this['body'] = body;
        return this;
    }
}