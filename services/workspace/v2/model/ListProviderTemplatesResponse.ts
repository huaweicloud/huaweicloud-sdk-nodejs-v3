import { ProviderTemplateInfo } from './ProviderTemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProviderTemplatesResponse extends SdkResponse {
    public templates?: Array<ProviderTemplateInfo>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<ProviderTemplateInfo>): ListProviderTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}