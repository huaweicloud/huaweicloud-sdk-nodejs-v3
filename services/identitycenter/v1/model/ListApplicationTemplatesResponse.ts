import { ApplicationTemplateDto } from './ApplicationTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationTemplatesResponse extends SdkResponse {
    private 'application_templates'?: Array<ApplicationTemplateDto>;
    public constructor() { 
        super();
    }
    public withApplicationTemplates(applicationTemplates: Array<ApplicationTemplateDto>): ListApplicationTemplatesResponse {
        this['application_templates'] = applicationTemplates;
        return this;
    }
    public set applicationTemplates(applicationTemplates: Array<ApplicationTemplateDto>  | undefined) {
        this['application_templates'] = applicationTemplates;
    }
    public get applicationTemplates(): Array<ApplicationTemplateDto> | undefined {
        return this['application_templates'];
    }
}