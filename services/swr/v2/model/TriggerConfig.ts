import { TriggerSetting } from './TriggerSetting';


export class TriggerConfig {
    public type?: TriggerConfigTypeEnum | string;
    private 'trigger_settings'?: TriggerSetting;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: TriggerConfigTypeEnum | string): TriggerConfig {
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

/**
    * @export
    * @enum {string}
    */
export enum TriggerConfigTypeEnum {
    MANUAL = 'manual',
    SCHEDULED = 'scheduled',
    EVENT_BASED = 'event_based'
}
