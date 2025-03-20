import { SlaRuleInfo } from './SlaRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlaCustomizedTemplateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'trigger_type'?: ShowSlaCustomizedTemplateResponseTriggerTypeEnum | string;
    private 'trigger_level'?: string;
    public application?: string;
    private 'default_template'?: boolean;
    public enabled?: boolean;
    private 'sla_rules'?: Array<SlaRuleInfo>;
    private 'effective_type'?: ShowSlaCustomizedTemplateResponseEffectiveTypeEnum | string;
    private 'effective_period'?: string;
    private 'effective_start_time'?: string;
    private 'effective_end_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSlaCustomizedTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowSlaCustomizedTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowSlaCustomizedTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withTriggerType(triggerType: ShowSlaCustomizedTemplateResponseTriggerTypeEnum | string): ShowSlaCustomizedTemplateResponse {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: ShowSlaCustomizedTemplateResponseTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): ShowSlaCustomizedTemplateResponseTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withTriggerLevel(triggerLevel: string): ShowSlaCustomizedTemplateResponse {
        this['trigger_level'] = triggerLevel;
        return this;
    }
    public set triggerLevel(triggerLevel: string  | undefined) {
        this['trigger_level'] = triggerLevel;
    }
    public get triggerLevel(): string | undefined {
        return this['trigger_level'];
    }
    public withApplication(application: string): ShowSlaCustomizedTemplateResponse {
        this['application'] = application;
        return this;
    }
    public withDefaultTemplate(defaultTemplate: boolean): ShowSlaCustomizedTemplateResponse {
        this['default_template'] = defaultTemplate;
        return this;
    }
    public set defaultTemplate(defaultTemplate: boolean  | undefined) {
        this['default_template'] = defaultTemplate;
    }
    public get defaultTemplate(): boolean | undefined {
        return this['default_template'];
    }
    public withEnabled(enabled: boolean): ShowSlaCustomizedTemplateResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withSlaRules(slaRules: Array<SlaRuleInfo>): ShowSlaCustomizedTemplateResponse {
        this['sla_rules'] = slaRules;
        return this;
    }
    public set slaRules(slaRules: Array<SlaRuleInfo>  | undefined) {
        this['sla_rules'] = slaRules;
    }
    public get slaRules(): Array<SlaRuleInfo> | undefined {
        return this['sla_rules'];
    }
    public withEffectiveType(effectiveType: ShowSlaCustomizedTemplateResponseEffectiveTypeEnum | string): ShowSlaCustomizedTemplateResponse {
        this['effective_type'] = effectiveType;
        return this;
    }
    public set effectiveType(effectiveType: ShowSlaCustomizedTemplateResponseEffectiveTypeEnum | string  | undefined) {
        this['effective_type'] = effectiveType;
    }
    public get effectiveType(): ShowSlaCustomizedTemplateResponseEffectiveTypeEnum | string | undefined {
        return this['effective_type'];
    }
    public withEffectivePeriod(effectivePeriod: string): ShowSlaCustomizedTemplateResponse {
        this['effective_period'] = effectivePeriod;
        return this;
    }
    public set effectivePeriod(effectivePeriod: string  | undefined) {
        this['effective_period'] = effectivePeriod;
    }
    public get effectivePeriod(): string | undefined {
        return this['effective_period'];
    }
    public withEffectiveStartTime(effectiveStartTime: string): ShowSlaCustomizedTemplateResponse {
        this['effective_start_time'] = effectiveStartTime;
        return this;
    }
    public set effectiveStartTime(effectiveStartTime: string  | undefined) {
        this['effective_start_time'] = effectiveStartTime;
    }
    public get effectiveStartTime(): string | undefined {
        return this['effective_start_time'];
    }
    public withEffectiveEndTime(effectiveEndTime: string): ShowSlaCustomizedTemplateResponse {
        this['effective_end_time'] = effectiveEndTime;
        return this;
    }
    public set effectiveEndTime(effectiveEndTime: string  | undefined) {
        this['effective_end_time'] = effectiveEndTime;
    }
    public get effectiveEndTime(): string | undefined {
        return this['effective_end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSlaCustomizedTemplateResponseTriggerTypeEnum {
    EVENT_TICKET = 'EVENT_TICKET',
    ALARM_TICKET = 'ALARM_TICKET',
    CHANGE_NOTE = 'CHANGE_NOTE',
    TO_DO_TASKS = 'TO_DO_TASKS',
    ISSUE_TICKET = 'ISSUE_TICKET'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSlaCustomizedTemplateResponseEffectiveTypeEnum {
    MON_SUN_24_HOURS = 'MON_SUN_24_HOURS',
    SPECIFIC_TIME = 'SPECIFIC_TIME'
}
