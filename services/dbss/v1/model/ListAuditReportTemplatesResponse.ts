import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditReportTemplatesResponse extends SdkResponse {
    private 'os_type'?: string;
    public templates?: Array<TemplateInfo>;
    public constructor() { 
        super();
    }
    public withOsType(osType: string): ListAuditReportTemplatesResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withTemplates(templates: Array<TemplateInfo>): ListAuditReportTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}