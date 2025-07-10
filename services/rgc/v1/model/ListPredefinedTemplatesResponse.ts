import { PredefinedTemplate } from './PredefinedTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPredefinedTemplatesResponse extends SdkResponse {
    public templates?: Array<PredefinedTemplate>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<PredefinedTemplate>): ListPredefinedTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}