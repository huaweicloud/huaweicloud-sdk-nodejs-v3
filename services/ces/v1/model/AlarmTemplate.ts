import { TemplateItem } from './TemplateItem';


export class AlarmTemplate {
    private 'template_name'?: string;
    private 'template_description'?: string;
    public namespace?: string;
    private 'dimension_name'?: string;
    private 'template_items'?: Array<TemplateItem>;
    private 'template_id'?: string;
    public constructor() { 
    }
    public withTemplateName(templateName: string): AlarmTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): AlarmTemplate {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withNamespace(namespace: string): AlarmTemplate {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): AlarmTemplate {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withTemplateItems(templateItems: Array<TemplateItem>): AlarmTemplate {
        this['template_items'] = templateItems;
        return this;
    }
    public set templateItems(templateItems: Array<TemplateItem>  | undefined) {
        this['template_items'] = templateItems;
    }
    public get templateItems(): Array<TemplateItem> | undefined {
        return this['template_items'];
    }
    public withTemplateId(templateId: string): AlarmTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}