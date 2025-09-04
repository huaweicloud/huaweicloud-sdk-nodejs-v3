import { AuthenticationTemplateSimple } from './AuthenticationTemplateSimple';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceAuthenticationTemplatesResponse extends SdkResponse {
    public templates?: Array<AuthenticationTemplateSimple>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<AuthenticationTemplateSimple>): ListDeviceAuthenticationTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
    public withPage(page: Page): ListDeviceAuthenticationTemplatesResponse {
        this['page'] = page;
        return this;
    }
}