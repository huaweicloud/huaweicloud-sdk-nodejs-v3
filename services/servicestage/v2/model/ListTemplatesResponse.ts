import { TemplateView } from './TemplateView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public templates?: Array<TemplateView>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<TemplateView>): ListTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}