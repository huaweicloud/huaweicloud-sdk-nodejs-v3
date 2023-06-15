import { AppQualityInfo } from './AppQualityInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTranscodingsTemplateResponse extends SdkResponse {
    public total?: number;
    public domain?: string;
    public templates?: Array<AppQualityInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowTranscodingsTemplateResponse {
        this['total'] = total;
        return this;
    }
    public withDomain(domain: string): ShowTranscodingsTemplateResponse {
        this['domain'] = domain;
        return this;
    }
    public withTemplates(templates: Array<AppQualityInfo>): ShowTranscodingsTemplateResponse {
        this['templates'] = templates;
        return this;
    }
}