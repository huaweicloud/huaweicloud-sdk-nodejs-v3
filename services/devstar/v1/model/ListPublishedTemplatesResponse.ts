import { TemplateSimpleInfo } from './TemplateSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublishedTemplatesResponse extends SdkResponse {
    public count?: number;
    public templates?: Array<TemplateSimpleInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPublishedTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withTemplates(templates: Array<TemplateSimpleInfo>): ListPublishedTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}