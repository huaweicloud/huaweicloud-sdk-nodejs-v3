import { Policies } from './Policies';


export class UpdateAlarmTemplateRequestBody {
    private 'template_name'?: string;
    private 'template_type'?: UpdateAlarmTemplateRequestBodyTemplateTypeEnum | number;
    private 'template_description'?: string;
    public policies?: Array<Policies>;
    public constructor(templateName?: string, policies?: Array<Policies>) { 
        this['template_name'] = templateName;
        this['policies'] = policies;
    }
    public withTemplateName(templateName: string): UpdateAlarmTemplateRequestBody {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: UpdateAlarmTemplateRequestBodyTemplateTypeEnum | number): UpdateAlarmTemplateRequestBody {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: UpdateAlarmTemplateRequestBodyTemplateTypeEnum | number  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): UpdateAlarmTemplateRequestBodyTemplateTypeEnum | number | undefined {
        return this['template_type'];
    }
    public withTemplateDescription(templateDescription: string): UpdateAlarmTemplateRequestBody {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withPolicies(policies: Array<Policies>): UpdateAlarmTemplateRequestBody {
        this['policies'] = policies;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAlarmTemplateRequestBodyTemplateTypeEnum {
    NUMBER_0 = 0,
    NUMBER_2 = 2
}
