import { EncoderSettingsExpand } from './EncoderSettingsExpand';
import { InputStreamInfo } from './InputStreamInfo';


export class ModifyOttChannelInputReq {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public input?: InputStreamInfo;
    private 'encoder_settings_expand'?: EncoderSettingsExpand;
    public constructor(domain?: string, appName?: string, id?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
    }
    public withDomain(domain: string): ModifyOttChannelInputReq {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ModifyOttChannelInputReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ModifyOttChannelInputReq {
        this['id'] = id;
        return this;
    }
    public withInput(input: InputStreamInfo): ModifyOttChannelInputReq {
        this['input'] = input;
        return this;
    }
    public withEncoderSettingsExpand(encoderSettingsExpand: EncoderSettingsExpand): ModifyOttChannelInputReq {
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