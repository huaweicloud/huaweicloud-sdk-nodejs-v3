import { Event2alarmRuleBodyMetadata } from './Event2alarmRuleBodyMetadata';
import { Event2alarmRuleBodyTriggerPolicies } from './Event2alarmRuleBodyTriggerPolicies';


export class Event2alarmRuleBody {
    private 'user_id'?: string;
    public name?: string;
    public description?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'resource_provider'?: string;
    public metadata?: Event2alarmRuleBodyMetadata;
    public enable?: boolean;
    private 'trigger_policies'?: Array<Event2alarmRuleBodyTriggerPolicies>;
    private 'alarm_type'?: string;
    private 'action_rule'?: string;
    private 'inhibit_rule'?: string;
    private 'route_group_rule'?: string;
    public constructor(userId?: string, name?: string, createTime?: number, metadata?: Event2alarmRuleBodyMetadata, enable?: boolean, triggerPolicies?: Array<Event2alarmRuleBodyTriggerPolicies>, alarmType?: string, actionRule?: string) { 
        this['user_id'] = userId;
        this['name'] = name;
        this['create_time'] = createTime;
        this['metadata'] = metadata;
        this['enable'] = enable;
        this['trigger_policies'] = triggerPolicies;
        this['alarm_type'] = alarmType;
        this['action_rule'] = actionRule;
    }
    public withUserId(userId: string): Event2alarmRuleBody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withName(name: string): Event2alarmRuleBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Event2alarmRuleBody {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): Event2alarmRuleBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): Event2alarmRuleBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withResourceProvider(resourceProvider: string): Event2alarmRuleBody {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withMetadata(metadata: Event2alarmRuleBodyMetadata): Event2alarmRuleBody {
        this['metadata'] = metadata;
        return this;
    }
    public withEnable(enable: boolean): Event2alarmRuleBody {
        this['enable'] = enable;
        return this;
    }
    public withTriggerPolicies(triggerPolicies: Array<Event2alarmRuleBodyTriggerPolicies>): Event2alarmRuleBody {
        this['trigger_policies'] = triggerPolicies;
        return this;
    }
    public set triggerPolicies(triggerPolicies: Array<Event2alarmRuleBodyTriggerPolicies>  | undefined) {
        this['trigger_policies'] = triggerPolicies;
    }
    public get triggerPolicies(): Array<Event2alarmRuleBodyTriggerPolicies> | undefined {
        return this['trigger_policies'];
    }
    public withAlarmType(alarmType: string): Event2alarmRuleBody {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withActionRule(actionRule: string): Event2alarmRuleBody {
        this['action_rule'] = actionRule;
        return this;
    }
    public set actionRule(actionRule: string  | undefined) {
        this['action_rule'] = actionRule;
    }
    public get actionRule(): string | undefined {
        return this['action_rule'];
    }
    public withInhibitRule(inhibitRule: string): Event2alarmRuleBody {
        this['inhibit_rule'] = inhibitRule;
        return this;
    }
    public set inhibitRule(inhibitRule: string  | undefined) {
        this['inhibit_rule'] = inhibitRule;
    }
    public get inhibitRule(): string | undefined {
        return this['inhibit_rule'];
    }
    public withRouteGroupRule(routeGroupRule: string): Event2alarmRuleBody {
        this['route_group_rule'] = routeGroupRule;
        return this;
    }
    public set routeGroupRule(routeGroupRule: string  | undefined) {
        this['route_group_rule'] = routeGroupRule;
    }
    public get routeGroupRule(): string | undefined {
        return this['route_group_rule'];
    }
}