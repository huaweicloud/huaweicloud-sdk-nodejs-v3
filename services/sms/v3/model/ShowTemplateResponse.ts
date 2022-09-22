import { TemplateResponseBody } from './TemplateResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateResponse extends SdkResponse {
    public template?: TemplateResponseBody;
    public constructor() { 
        super();
    }
    public withTemplate(template: TemplateResponseBody): ShowTemplateResponse {
        this['template'] = template;
        return this;
    }
}