import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesV2Response extends SdkResponse {
    public count?: number;
    public templates?: Array<TemplateInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTemplatesV2Response {
        this['count'] = count;
        return this;
    }
    public withTemplates(templates: Array<TemplateInfo>): ListTemplatesV2Response {
        this['templates'] = templates;
        return this;
    }
}