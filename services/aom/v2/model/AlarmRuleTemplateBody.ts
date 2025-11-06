import { AlarmRuleTemplateSpecWithCloudService } from './AlarmRuleTemplateSpecWithCloudService';
import { Templating } from './Templating';


export class AlarmRuleTemplateBody {
    private 'alarm_rule_template_name'?: string;
    private 'alarm_rule_template_name_en'?: string;
    private 'alarm_rule_template_description'?: string;
    private 'alarm_rule_template_id'?: string;
    private 'alarm_rule_template_project_id'?: string;
    private 'alarm_rule_template_type'?: string;
    private 'alarm_rule_template_source'?: string;
    private 'alarm_rule_template_binding'?: { [key: string]: string; };
    private 'alarm_template_spec_list'?: Array<AlarmRuleTemplateSpecWithCloudService>;
    private 'enterprise_project_id'?: string;
    private 'create_time'?: number;
    private 'modify_time'?: number;
    public templating?: Templating;
    private 'template_version'?: string;
    public constructor(alarmRuleTemplateName?: string, alarmRuleTemplateDescription?: string, alarmRuleTemplateId?: string, alarmRuleTemplateType?: string, alarmRuleTemplateBinding?: { [key: string]: string; }, alarmTemplateSpecList?: Array<AlarmRuleTemplateSpecWithCloudService>, templating?: Templating, templateVersion?: string) { 
        this['alarm_rule_template_name'] = alarmRuleTemplateName;
        this['alarm_rule_template_description'] = alarmRuleTemplateDescription;
        this['alarm_rule_template_id'] = alarmRuleTemplateId;
        this['alarm_rule_template_type'] = alarmRuleTemplateType;
        this['alarm_rule_template_binding'] = alarmRuleTemplateBinding;
        this['alarm_template_spec_list'] = alarmTemplateSpecList;
        this['templating'] = templating;
        this['template_version'] = templateVersion;
    }
    public withAlarmRuleTemplateName(alarmRuleTemplateName: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_name'] = alarmRuleTemplateName;
        return this;
    }
    public set alarmRuleTemplateName(alarmRuleTemplateName: string  | undefined) {
        this['alarm_rule_template_name'] = alarmRuleTemplateName;
    }
    public get alarmRuleTemplateName(): string | undefined {
        return this['alarm_rule_template_name'];
    }
    public withAlarmRuleTemplateNameEn(alarmRuleTemplateNameEn: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_name_en'] = alarmRuleTemplateNameEn;
        return this;
    }
    public set alarmRuleTemplateNameEn(alarmRuleTemplateNameEn: string  | undefined) {
        this['alarm_rule_template_name_en'] = alarmRuleTemplateNameEn;
    }
    public get alarmRuleTemplateNameEn(): string | undefined {
        return this['alarm_rule_template_name_en'];
    }
    public withAlarmRuleTemplateDescription(alarmRuleTemplateDescription: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_description'] = alarmRuleTemplateDescription;
        return this;
    }
    public set alarmRuleTemplateDescription(alarmRuleTemplateDescription: string  | undefined) {
        this['alarm_rule_template_description'] = alarmRuleTemplateDescription;
    }
    public get alarmRuleTemplateDescription(): string | undefined {
        return this['alarm_rule_template_description'];
    }
    public withAlarmRuleTemplateId(alarmRuleTemplateId: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_id'] = alarmRuleTemplateId;
        return this;
    }
    public set alarmRuleTemplateId(alarmRuleTemplateId: string  | undefined) {
        this['alarm_rule_template_id'] = alarmRuleTemplateId;
    }
    public get alarmRuleTemplateId(): string | undefined {
        return this['alarm_rule_template_id'];
    }
    public withAlarmRuleTemplateProjectId(alarmRuleTemplateProjectId: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_project_id'] = alarmRuleTemplateProjectId;
        return this;
    }
    public set alarmRuleTemplateProjectId(alarmRuleTemplateProjectId: string  | undefined) {
        this['alarm_rule_template_project_id'] = alarmRuleTemplateProjectId;
    }
    public get alarmRuleTemplateProjectId(): string | undefined {
        return this['alarm_rule_template_project_id'];
    }
    public withAlarmRuleTemplateType(alarmRuleTemplateType: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_type'] = alarmRuleTemplateType;
        return this;
    }
    public set alarmRuleTemplateType(alarmRuleTemplateType: string  | undefined) {
        this['alarm_rule_template_type'] = alarmRuleTemplateType;
    }
    public get alarmRuleTemplateType(): string | undefined {
        return this['alarm_rule_template_type'];
    }
    public withAlarmRuleTemplateSource(alarmRuleTemplateSource: string): AlarmRuleTemplateBody {
        this['alarm_rule_template_source'] = alarmRuleTemplateSource;
        return this;
    }
    public set alarmRuleTemplateSource(alarmRuleTemplateSource: string  | undefined) {
        this['alarm_rule_template_source'] = alarmRuleTemplateSource;
    }
    public get alarmRuleTemplateSource(): string | undefined {
        return this['alarm_rule_template_source'];
    }
    public withAlarmRuleTemplateBinding(alarmRuleTemplateBinding: { [key: string]: string; }): AlarmRuleTemplateBody {
        this['alarm_rule_template_binding'] = alarmRuleTemplateBinding;
        return this;
    }
    public set alarmRuleTemplateBinding(alarmRuleTemplateBinding: { [key: string]: string; }  | undefined) {
        this['alarm_rule_template_binding'] = alarmRuleTemplateBinding;
    }
    public get alarmRuleTemplateBinding(): { [key: string]: string; } | undefined {
        return this['alarm_rule_template_binding'];
    }
    public withAlarmTemplateSpecList(alarmTemplateSpecList: Array<AlarmRuleTemplateSpecWithCloudService>): AlarmRuleTemplateBody {
        this['alarm_template_spec_list'] = alarmTemplateSpecList;
        return this;
    }
    public set alarmTemplateSpecList(alarmTemplateSpecList: Array<AlarmRuleTemplateSpecWithCloudService>  | undefined) {
        this['alarm_template_spec_list'] = alarmTemplateSpecList;
    }
    public get alarmTemplateSpecList(): Array<AlarmRuleTemplateSpecWithCloudService> | undefined {
        return this['alarm_template_spec_list'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AlarmRuleTemplateBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreateTime(createTime: number): AlarmRuleTemplateBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): AlarmRuleTemplateBody {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
    public withTemplating(templating: Templating): AlarmRuleTemplateBody {
        this['templating'] = templating;
        return this;
    }
    public withTemplateVersion(templateVersion: string): AlarmRuleTemplateBody {
        this['template_version'] = templateVersion;
        return this;
    }
    public set templateVersion(templateVersion: string  | undefined) {
        this['template_version'] = templateVersion;
    }
    public get templateVersion(): string | undefined {
        return this['template_version'];
    }
}