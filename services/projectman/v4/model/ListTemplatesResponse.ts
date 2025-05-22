import { TemplateListV4ResponseBodyTemplates } from './TemplateListV4ResponseBodyTemplates';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public templates?: Array<TemplateListV4ResponseBodyTemplates>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<TemplateListV4ResponseBodyTemplates>): ListTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}