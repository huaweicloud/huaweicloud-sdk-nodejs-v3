import { EncoderSettingsExpand } from './EncoderSettingsExpand';
import { ModifyOttChannelEncoderSettingsEncoderSettings } from './ModifyOttChannelEncoderSettingsEncoderSettings';


export class ModifyOttChannelEncoderSettings {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    private 'encoder_settings'?: Array<ModifyOttChannelEncoderSettingsEncoderSettings>;
    private 'encoder_settings_expand'?: EncoderSettingsExpand;
    public constructor(domain?: string, appName?: string, id?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
    }
    public withDomain(domain: string): ModifyOttChannelEncoderSettings {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ModifyOttChannelEncoderSettings {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ModifyOttChannelEncoderSettings {
        this['id'] = id;
        return this;
    }
    public withEncoderSettings(encoderSettings: Array<ModifyOttChannelEncoderSettingsEncoderSettings>): ModifyOttChannelEncoderSettings {
        this['encoder_settings'] = encoderSettings;
        return this;
    }
    public set encoderSettings(encoderSettings: Array<ModifyOttChannelEncoderSettingsEncoderSettings>  | undefined) {
        this['encoder_settings'] = encoderSettings;
    }
    public get encoderSettings(): Array<ModifyOttChannelEncoderSettingsEncoderSettings> | undefined {
        return this['encoder_settings'];
    }
    public withEncoderSettingsExpand(encoderSettingsExpand: EncoderSettingsExpand): ModifyOttChannelEncoderSettings {
        this['encoder_settings_expand'] = encoderSettingsExpand;
        return this;
    }
    public set encoderSettingsExpand(encoderSettingsExpand: EncoderSettingsExpand  | undefined) {
        this['encoder_settings_expand'] = encoderSettingsExpand;
    }
    public get encoderSettingsExpand(): EncoderSettingsExpand | undefined {
        return this['encoder_settings_expand'];
    }
}