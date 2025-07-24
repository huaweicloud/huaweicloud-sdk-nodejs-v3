

export class TaskAdvancedSettingsItem {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): TaskAdvancedSettingsItem {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TaskAdvancedSettingsItem {
        this['value'] = value;
        return this;
    }
}