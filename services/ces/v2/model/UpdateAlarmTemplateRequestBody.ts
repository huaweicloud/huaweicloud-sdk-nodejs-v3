import { TemplateTypeUpdate } from './TemplateTypeUpdate';
import { UpdateAlarmTemplatePolicies } from './UpdateAlarmTemplatePolicies';


export class UpdateAlarmTemplateRequestBody {
    private 'template_name'?: string;
    private 'template_type'?: TemplateTypeUpdate;
    private 'template_description'?: string;
    public policies?: Array<UpdateAlarmTemplatePolicies>;
    public constructor(templateName?: string, policies?: Array<UpdateAlarmTemplatePolicies>) { 
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
    public withTemplateType(templateType: TemplateTypeUpdate): UpdateAlarmTemplateRequestBody {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: TemplateTypeUpdate  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): TemplateTypeUpdate | undefined {
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
    public withPolicies(policies: Array<UpdateAlarmTemplatePolicies>): UpdateAlarmTemplateRequestBody {
        this['policies'] = policies;
        return this;
    }
}