import { Template } from './Template';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public templates?: Array<Template>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<Template>): ListTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}