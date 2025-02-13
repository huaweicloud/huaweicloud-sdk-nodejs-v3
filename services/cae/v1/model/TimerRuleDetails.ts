import { AppInfo } from './AppInfo';
import { ComponentInfo } from './ComponentInfo';


export class TimerRuleDetails {
    public id?: string;
    public name?: string;
    public type?: string;
    public status?: string;
    private 'env_id'?: string;
    public apps?: Array<AppInfo>;
    public components?: Array<ComponentInfo>;
    private 'component_number'?: number;
    public cron?: string;
    private 'effective_range'?: string;
    private 'effective_policy'?: string;
    private 'last_execution_status'?: string;
    public constructor() { 
    }
    public withId(id: string): TimerRuleDetails {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TimerRuleDetails {
        this['name'] = name;
        return this;
    }
    public withType(type: string): TimerRuleDetails {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): TimerRuleDetails {
        this['status'] = status;
        return this;
    }
    public withEnvId(envId: string): TimerRuleDetails {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withApps(apps: Array<AppInfo>): TimerRuleDetails {
        this['apps'] = apps;
        return this;
    }
    public withComponents(components: Array<ComponentInfo>): TimerRuleDetails {
        this['components'] = components;
        return this;
    }
    public withComponentNumber(componentNumber: number): TimerRuleDetails {
        this['component_number'] = componentNumber;
        return this;
    }
    public set componentNumber(componentNumber: number  | undefined) {
        this['component_number'] = componentNumber;
    }
    public get componentNumber(): number | undefined {
        return this['component_number'];
    }
    public withCron(cron: string): TimerRuleDetails {
        this['cron'] = cron;
        return this;
    }
    public withEffectiveRange(effectiveRange: string): TimerRuleDetails {
        this['effective_range'] = effectiveRange;
        return this;
    }
    public set effectiveRange(effectiveRange: string  | undefined) {
        this['effective_range'] = effectiveRange;
    }
    public get effectiveRange(): string | undefined {
        return this['effective_range'];
    }
    public withEffectivePolicy(effectivePolicy: string): TimerRuleDetails {
        this['effective_policy'] = effectivePolicy;
        return this;
    }
    public set effectivePolicy(effectivePolicy: string  | undefined) {
        this['effective_policy'] = effectivePolicy;
    }
    public get effectivePolicy(): string | undefined {
        return this['effective_policy'];
    }
    public withLastExecutionStatus(lastExecutionStatus: string): TimerRuleDetails {
        this['last_execution_status'] = lastExecutionStatus;
        return this;
    }
    public set lastExecutionStatus(lastExecutionStatus: string  | undefined) {
        this['last_execution_status'] = lastExecutionStatus;
    }
    public get lastExecutionStatus(): string | undefined {
        return this['last_execution_status'];
    }
}