import { Policies } from './Policies';


export class CreateAlarmTemplateRequestBody {
    private 'template_name'?: string;
    private 'template_type'?: CreateAlarmTemplateRequestBodyTemplateTypeEnum | number;
    private 'template_description'?: string;
    private 'is_overwrite'?: boolean;
    public policies?: Array<Policies>;
    public constructor(templateName?: string, policies?: Array<Policies>) { 
        this['template_name'] = templateName;
        this['policies'] = policies;
    }
    public withTemplateName(templateName: string): CreateAlarmTemplateRequestBody {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: CreateAlarmTemplateRequestBodyTemplateTypeEnum | number): CreateAlarmTemplateRequestBody {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: CreateAlarmTemplateRequestBodyTemplateTypeEnum | number  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): CreateAlarmTemplateRequestBodyTemplateTypeEnum | number | undefined {
        return this['template_type'];
    }
    public withTemplateDescription(templateDescription: string): CreateAlarmTemplateRequestBody {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withIsOverwrite(isOverwrite: boolean): CreateAlarmTemplateRequestBody {
        this['is_overwrite'] = isOverwrite;
        return this;
    }
    public set isOverwrite(isOverwrite: boolean  | undefined) {
        this['is_overwrite'] = isOverwrite;
    }
    public get isOverwrite(): boolean | undefined {
        return this['is_overwrite'];
    }
    public withPolicies(policies: Array<Policies>): CreateAlarmTemplateRequestBody {
        this['policies'] = policies;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAlarmTemplateRequestBodyTemplateTypeEnum {
    NUMBER_0 = 0,
    NUMBER_2 = 2
}
