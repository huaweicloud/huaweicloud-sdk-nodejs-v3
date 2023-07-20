import { OBSTriggerConfig } from './OBSTriggerConfig';


export class Trigger {
    private 'trigger_name'?: string;
    private 'trigger_type'?: TriggerTriggerTypeEnum | string;
    public enabled?: boolean;
    private 'trigger_config'?: OBSTriggerConfig;
    public constructor(triggerName?: string, triggerType?: string) { 
        this['trigger_name'] = triggerName;
        this['trigger_type'] = triggerType;
    }
    public withTriggerName(triggerName: string): Trigger {
        this['trigger_name'] = triggerName;
        return this;
    }
    public set triggerName(triggerName: string  | undefined) {
        this['trigger_name'] = triggerName;
    }
    public get triggerName(): string | undefined {
        return this['trigger_name'];
    }
    public withTriggerType(triggerType: TriggerTriggerTypeEnum | string): Trigger {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: TriggerTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): TriggerTriggerTypeEnum | string | undefined {
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
    public set triggerConfig(triggerConfig: OBSTriggerConfig  | undefined) {
        this['trigger_config'] = triggerConfig;
    }
    public get triggerConfig(): OBSTriggerConfig | undefined {
        return this['trigger_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerTriggerTypeEnum {
    FLOWTIMER = 'FLOWTIMER',
    SMN = 'SMN',
    APIG = 'APIG',
    APIG_DE = 'APIG_DE',
    OBS = 'OBS'
}
