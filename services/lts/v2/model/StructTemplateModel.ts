import { DemoField } from './DemoField';
import { StructTemplate } from './StructTemplate';
import { TagFieldNew } from './TagFieldNew';
import { TemplateRule } from './TemplateRule';


export class StructTemplateModel {
    private 'project_id': string | undefined;
    private 'template_name': string | undefined;
    private 'template_type': StructTemplateModelTemplateTypeEnum | undefined;
    private 'demo_log': string | undefined;
    private 'demo_fields': Array<DemoField> | undefined;
    private 'tag_fields': Array<TagFieldNew> | undefined;
    public rule: TemplateRule;
    private 'demo_label'?: string | undefined;
    private 'create_time'?: number | undefined;
    public id?: string;
    public constructor(projectId?: any, templateName?: any, templateType?: any, demoLog?: any, demoFields?: any, tagFields?: any, rule?: any) { 
        this['project_id'] = projectId;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
        this['demo_log'] = demoLog;
        this['demo_fields'] = demoFields;
        this['tag_fields'] = tagFields;
        this['rule'] = rule;
    }
    public withProjectId(projectId: string): StructTemplateModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTemplateName(templateName: string): StructTemplateModel {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateType(templateType: StructTemplateModelTemplateTypeEnum): StructTemplateModel {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: StructTemplateModelTemplateTypeEnum | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType() {
        return this['template_type'];
    }
    public withDemoLog(demoLog: string): StructTemplateModel {
        this['demo_log'] = demoLog;
        return this;
    }
    public set demoLog(demoLog: string | undefined) {
        this['demo_log'] = demoLog;
    }
    public get demoLog() {
        return this['demo_log'];
    }
    public withDemoFields(demoFields: Array<DemoField>): StructTemplateModel {
        this['demo_fields'] = demoFields;
        return this;
    }
    public set demoFields(demoFields: Array<DemoField> | undefined) {
        this['demo_fields'] = demoFields;
    }
    public get demoFields() {
        return this['demo_fields'];
    }
    public withTagFields(tagFields: Array<TagFieldNew>): StructTemplateModel {
        this['tag_fields'] = tagFields;
        return this;
    }
    public set tagFields(tagFields: Array<TagFieldNew> | undefined) {
        this['tag_fields'] = tagFields;
    }
    public get tagFields() {
        return this['tag_fields'];
    }
    public withRule(rule: TemplateRule): StructTemplateModel {
        this['rule'] = rule;
        return this;
    }
    public withDemoLabel(demoLabel: string): StructTemplateModel {
        this['demo_label'] = demoLabel;
        return this;
    }
    public set demoLabel(demoLabel: string | undefined) {
        this['demo_label'] = demoLabel;
    }
    public get demoLabel() {
        return this['demo_label'];
    }
    public withCreateTime(createTime: number): StructTemplateModel {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withId(id: string): StructTemplateModel {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StructTemplateModelTemplateTypeEnum {
    REGEX = 'regex',
    JSON = 'json',
    SPLIT = 'split',
    NGINX = 'nginx'
}
