import { CustomAttributes } from './CustomAttributes';


export class Ruleset {
    private 'project_id'?: string;
    private 'template_name'?: string;
    public language?: string;
    private 'is_default'?: string;
    private 'rule_ids'?: string;
    private 'uncheck_ids'?: string;
    private 'template_id'?: string;
    private 'custom_attributes'?: Array<CustomAttributes>;
    public constructor(projectId?: string, templateName?: string, language?: string, isDefault?: string, ruleIds?: string) { 
        this['project_id'] = projectId;
        this['template_name'] = templateName;
        this['language'] = language;
        this['is_default'] = isDefault;
        this['rule_ids'] = ruleIds;
    }
    public withProjectId(projectId: string): Ruleset {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTemplateName(templateName: string): Ruleset {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withLanguage(language: string): Ruleset {
        this['language'] = language;
        return this;
    }
    public withIsDefault(isDefault: string): Ruleset {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: string  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): string | undefined {
        return this['is_default'];
    }
    public withRuleIds(ruleIds: string): Ruleset {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: string  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): string | undefined {
        return this['rule_ids'];
    }
    public withUncheckIds(uncheckIds: string): Ruleset {
        this['uncheck_ids'] = uncheckIds;
        return this;
    }
    public set uncheckIds(uncheckIds: string  | undefined) {
        this['uncheck_ids'] = uncheckIds;
    }
    public get uncheckIds(): string | undefined {
        return this['uncheck_ids'];
    }
    public withTemplateId(templateId: string): Ruleset {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withCustomAttributes(customAttributes: Array<CustomAttributes>): Ruleset {
        this['custom_attributes'] = customAttributes;
        return this;
    }
    public set customAttributes(customAttributes: Array<CustomAttributes>  | undefined) {
        this['custom_attributes'] = customAttributes;
    }
    public get customAttributes(): Array<CustomAttributes> | undefined {
        return this['custom_attributes'];
    }
}