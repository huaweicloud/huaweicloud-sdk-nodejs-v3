import { AppInfo } from './AppInfo';
import { ComponentInfo } from './ComponentInfo';


export class UpdateTimerRuleDetails {
    public name?: string;
    public type?: string;
    public status?: string;
    public apps?: Array<AppInfo>;
    public components?: Array<ComponentInfo>;
    public cron?: string;
    private 'effective_range'?: string;
    private 'effective_policy'?: string;
    public constructor(name?: string, type?: string, status?: string, cron?: string, effectiveRange?: string, effectivePolicy?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['status'] = status;
        this['cron'] = cron;
        this['effective_range'] = effectiveRange;
        this['effective_policy'] = effectivePolicy;
    }
    public withName(name: string): UpdateTimerRuleDetails {
        this['name'] = name;
        return this;
    }
    public withType(type: string): UpdateTimerRuleDetails {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): UpdateTimerRuleDetails {
        this['status'] = status;
        return this;
    }
    public withApps(apps: Array<AppInfo>): UpdateTimerRuleDetails {
        this['apps'] = apps;
        return this;
    }
    public withComponents(components: Array<ComponentInfo>): UpdateTimerRuleDetails {
        this['components'] = components;
        return this;
    }
    public withCron(cron: string): UpdateTimerRuleDetails {
        this['cron'] = cron;
        return this;
    }
    public withEffectiveRange(effectiveRange: string): UpdateTimerRuleDetails {
        this['effective_range'] = effectiveRange;
        return this;
    }
    public set effectiveRange(effectiveRange: string  | undefined) {
        this['effective_range'] = effectiveRange;
    }
    public get effectiveRange(): string | undefined {
        return this['effective_range'];
    }
    public withEffectivePolicy(effectivePolicy: string): UpdateTimerRuleDetails {
        this['effective_policy'] = effectivePolicy;
        return this;
    }
    public set effectivePolicy(effectivePolicy: string  | undefined) {
        this['effective_policy'] = effectivePolicy;
    }
    public get effectivePolicy(): string | undefined {
        return this['effective_policy'];
    }
}