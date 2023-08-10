import { CreateAlarmTemplateRequestBody } from './CreateAlarmTemplateRequestBody';
import { TemplateItem } from './TemplateItem';


export class UpdateAlarmTemplateRequestBody {
    private 'template_name'?: string;
    private 'template_description'?: string;
    public namespace?: string;
    private 'dimension_name'?: string;
    private 'template_items'?: Array<TemplateItem>;
    public constructor(templateName?: string, namespace?: string, dimensionName?: string, templateItems?: Array<TemplateItem>) { 
        this['template_name'] = templateName;
        this['namespace'] = namespace;
        this['dimension_name'] = dimensionName;
        this['template_items'] = templateItems;
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
    public withNamespace(namespace: string): UpdateAlarmTemplateRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): UpdateAlarmTemplateRequestBody {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withTemplateItems(templateItems: Array<TemplateItem>): UpdateAlarmTemplateRequestBody {
        this['template_items'] = templateItems;
        return this;
    }
    public set templateItems(templateItems: Array<TemplateItem>  | undefined) {
        this['template_items'] = templateItems;
    }
    public get templateItems(): Array<TemplateItem> | undefined {
        return this['template_items'];
    }
}