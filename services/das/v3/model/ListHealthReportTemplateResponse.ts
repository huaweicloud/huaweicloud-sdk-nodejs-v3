import { HealthReportTemplateDto } from './HealthReportTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthReportTemplateResponse extends SdkResponse {
    public templates?: Array<HealthReportTemplateDto>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<HealthReportTemplateDto>): ListHealthReportTemplateResponse {
        this['templates'] = templates;
        return this;
    }
}