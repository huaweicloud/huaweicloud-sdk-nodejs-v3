

export class TaskCheckSettingsItem {
    private 'cfg_key'?: string;
    public status?: string;
    private 'cfg_value'?: string;
    public constructor(cfgKey?: string, status?: string) { 
        this['cfg_key'] = cfgKey;
        this['status'] = status;
    }
    public withCfgKey(cfgKey: string): TaskCheckSettingsItem {
        this['cfg_key'] = cfgKey;
        return this;
    }
    public set cfgKey(cfgKey: string  | undefined) {
        this['cfg_key'] = cfgKey;
    }
    public get cfgKey(): string | undefined {
        return this['cfg_key'];
    }
    public withStatus(status: string): TaskCheckSettingsItem {
        this['status'] = status;
        return this;
    }
    public withCfgValue(cfgValue: string): TaskCheckSettingsItem {
        this['cfg_value'] = cfgValue;
        return this;
    }
    public set cfgValue(cfgValue: string  | undefined) {
        this['cfg_value'] = cfgValue;
    }
    public get cfgValue(): string | undefined {
        return this['cfg_value'];
    }
}