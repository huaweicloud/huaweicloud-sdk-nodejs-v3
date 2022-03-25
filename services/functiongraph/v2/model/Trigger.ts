import { OBSTriggerConfig } from './OBSTriggerConfig';


export class Trigger {
    private 'trigger_name'?: string | undefined;
    private 'trigger_type'?: TriggerTriggerTypeEnum | undefined;
    public enabled?: boolean;
    private 'trigger_config'?: OBSTriggerConfig | undefined;
    public constructor() { 
    }
    public withTriggerName(triggerName: string): Trigger {
        this['trigger_name'] = triggerName;
        return this;
    }
    public set triggerName(triggerName: string | undefined) {
        this['trigger_name'] = triggerName;
    }
    public get triggerName() {
        return this['trigger_name'];
    }
    public withTriggerType(triggerType: TriggerTriggerTypeEnum): Trigger {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: TriggerTriggerTypeEnum | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType() {
        return this['trigger_type'];
    }
    public withEnabled(enabled: boolean): Trigger {
        this['enabled'] = enabled;
        return this;
    }
    public withTriggerConfig(triggerConfig: OBSTriggerConfig): Trigger {
        this['trigger_config'] = triggerConfig;
        return this;
    }
    public set triggerConfig(triggerConfig: OBSTriggerConfig | undefined) {
        this['trigger_config'] = triggerConfig;
    }
    public get triggerConfig() {
        return this['trigger_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerTriggerTypeEnum {
    FLOWTIMER = 'FLOWTIMER',
    OBS = 'OBS'
}
