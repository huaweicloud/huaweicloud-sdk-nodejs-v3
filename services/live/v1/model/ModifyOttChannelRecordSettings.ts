import { ModifyOttChannelRecordSettingsRecordSettings } from './ModifyOttChannelRecordSettingsRecordSettings';


export class ModifyOttChannelRecordSettings {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    private 'record_settings'?: ModifyOttChannelRecordSettingsRecordSettings;
    public constructor(domain?: string, appName?: string, id?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
    }
    public withDomain(domain: string): ModifyOttChannelRecordSettings {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ModifyOttChannelRecordSettings {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ModifyOttChannelRecordSettings {
        this['id'] = id;
        return this;
    }
    public withRecordSettings(recordSettings: ModifyOttChannelRecordSettingsRecordSettings): ModifyOttChannelRecordSettings {
        this['record_settings'] = recordSettings;
        return this;
    }
    public set recordSettings(recordSettings: ModifyOttChannelRecordSettingsRecordSettings  | undefined) {
        this['record_settings'] = recordSettings;
    }
    public get recordSettings(): ModifyOttChannelRecordSettingsRecordSettings | undefined {
        return this['record_settings'];
    }
}