import { RuleTemplateDetailVO } from './RuleTemplateDetailVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQualityTemplatesResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<RuleTemplateDetailVO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListQualityTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<RuleTemplateDetailVO>): ListQualityTemplatesResponse {
        this['resources'] = resources;
        return this;
    }
}