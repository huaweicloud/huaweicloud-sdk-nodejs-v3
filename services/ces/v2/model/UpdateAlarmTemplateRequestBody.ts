import { Policies } from './Policies';


export class UpdateAlarmTemplateRequestBody {
    private 'template_name'?: string;
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