import { TriggerSetting } from './TriggerSetting';


export class TriggerConfig {
    public type?: string;
    private 'trigger_settings'?: TriggerSetting;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): TriggerConfig {
        this['type'] = type;
        return this;
    }
    public withTriggerSettings(triggerSettings: TriggerSetting): TriggerConfig {
        this['trigger_settings'] = triggerSettings;
        return this;
    }
    public set triggerSettings(triggerSettings: TriggerSetting  | undefined) {
        this['trigger_settings'] = triggerSettings;
    }
    public get triggerSettings(): TriggerSetting | undefined {
        return this['trigger_settings'];
    }
}