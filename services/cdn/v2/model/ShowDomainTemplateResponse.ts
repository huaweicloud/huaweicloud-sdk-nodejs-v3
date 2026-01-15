import { TemplateItem } from './TemplateItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainTemplateResponse extends SdkResponse {
    public total?: number;
    public templates?: Array<TemplateItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowDomainTemplateResponse {
        this['total'] = total;
        return this;
    }
    public withTemplates(templates: Array<TemplateItem>): ShowDomainTemplateResponse {
        this['templates'] = templates;
        return this;
    }
}