import { TemplateResponseBody } from './TemplateResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public count?: number;
    public templates?: Array<TemplateResponseBody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withTemplates(templates: Array<TemplateResponseBody>): ListTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}