import { Page } from './Page';
import { ProvisioningTemplateSimple } from './ProvisioningTemplateSimple';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProvisioningTemplatesResponse extends SdkResponse {
    public templates?: Array<ProvisioningTemplateSimple>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<ProvisioningTemplateSimple>): ListProvisioningTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
    public withPage(page: Page): ListProvisioningTemplatesResponse {
        this['page'] = page;
        return this;
    }
}