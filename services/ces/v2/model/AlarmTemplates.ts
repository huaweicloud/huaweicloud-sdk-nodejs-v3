import { TemplateType } from './TemplateType';


export class AlarmTemplates {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: TemplateType;
    private 'create_time'?: Date;
    private 'template_description'?: string;
    public constructor(templateId?: string, templateName?: string, templateType?: TemplateType, createTime?: Date) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
        this['create_time'] = createTime;
    }
    public withTemplateId(templateId: string): AlarmTemplates {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): AlarmTemplates {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: TemplateType): AlarmTemplates {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: TemplateType  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): TemplateType | undefined {
        return this['template_type'];
    }
    public withCreateTime(createTime: Date): AlarmTemplates {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withTemplateDescription(templateDescription: string): AlarmTemplates {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
}