import { AssociationResourceGroup } from './AssociationResourceGroup';
import { PolicyStatistics } from './PolicyStatistics';
import { TemplateType } from './TemplateType';


export class AlarmTemplates {
    private 'template_id'?: string;
    private 'template_name'?: string;
    private 'template_type'?: TemplateType;
    private 'create_time'?: Date;
    private 'template_description'?: string;
    private 'association_alarm_total'?: number;
    private 'policy_total'?: number;
    private 'policy_statistics'?: Array<PolicyStatistics>;
    private 'association_resource_groups'?: Array<AssociationResourceGroup>;
    public constructor(templateId?: string, templateName?: string, templateType?: TemplateType, createTime?: Date, templateDescription?: string, policyTotal?: number, policyStatistics?: Array<PolicyStatistics>) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
        this['create_time'] = createTime;
        this['template_description'] = templateDescription;
        this['policy_total'] = policyTotal;
        this['policy_statistics'] = policyStatistics;
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
    public withAssociationAlarmTotal(associationAlarmTotal: number): AlarmTemplates {
        this['association_alarm_total'] = associationAlarmTotal;
        return this;
    }
    public set associationAlarmTotal(associationAlarmTotal: number  | undefined) {
        this['association_alarm_total'] = associationAlarmTotal;
    }
    public get associationAlarmTotal(): number | undefined {
        return this['association_alarm_total'];
    }
    public withPolicyTotal(policyTotal: number): AlarmTemplates {
        this['policy_total'] = policyTotal;
        return this;
    }
    public set policyTotal(policyTotal: number  | undefined) {
        this['policy_total'] = policyTotal;
    }
    public get policyTotal(): number | undefined {
        return this['policy_total'];
    }
    public withPolicyStatistics(policyStatistics: Array<PolicyStatistics>): AlarmTemplates {
        this['policy_statistics'] = policyStatistics;
        return this;
    }
    public set policyStatistics(policyStatistics: Array<PolicyStatistics>  | undefined) {
        this['policy_statistics'] = policyStatistics;
    }
    public get policyStatistics(): Array<PolicyStatistics> | undefined {
        return this['policy_statistics'];
    }
    public withAssociationResourceGroups(associationResourceGroups: Array<AssociationResourceGroup>): AlarmTemplates {
        this['association_resource_groups'] = associationResourceGroups;
        return this;
    }
    public set associationResourceGroups(associationResourceGroups: Array<AssociationResourceGroup>  | undefined) {
        this['association_resource_groups'] = associationResourceGroups;
    }
    public get associationResourceGroups(): Array<AssociationResourceGroup> | undefined {
        return this['association_resource_groups'];
    }
}