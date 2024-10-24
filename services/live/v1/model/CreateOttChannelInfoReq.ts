import { CreateOttChannelInfoReqRecordSettings } from './CreateOttChannelInfoReqRecordSettings';
import { EncoderSettingsExpand } from './EncoderSettingsExpand';
import { EndpointItem } from './EndpointItem';
import { InputStreamInfo } from './InputStreamInfo';
import { ModifyOttChannelEncoderSettingsEncoderSettings } from './ModifyOttChannelEncoderSettingsEncoderSettings';


export class CreateOttChannelInfoReq {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public name?: string;
    public state?: CreateOttChannelInfoReqStateEnum | string;
    public input?: InputStreamInfo;
    private 'encoder_settings'?: Array<ModifyOttChannelEncoderSettingsEncoderSettings>;
    private 'record_settings'?: CreateOttChannelInfoReqRecordSettings;
    public endpoints?: Array<EndpointItem>;
    private 'encoder_settings_expand'?: EncoderSettingsExpand;
    public constructor(domain?: string, appName?: string, id?: string, state?: string, input?: InputStreamInfo, recordSettings?: CreateOttChannelInfoReqRecordSettings, endpoints?: Array<EndpointItem>) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
        this['state'] = state;
        this['input'] = input;
        this['record_settings'] = recordSettings;
        this['endpoints'] = endpoints;
    }
    public withDomain(domain: string): CreateOttChannelInfoReq {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): CreateOttChannelInfoReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): CreateOttChannelInfoReq {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateOttChannelInfoReq {
        this['name'] = name;
        return this;
    }
    public withState(state: CreateOttChannelInfoReqStateEnum | string): CreateOttChannelInfoReq {
        this['state'] = state;
        return this;
    }
    public withInput(input: InputStreamInfo): CreateOttChannelInfoReq {
        this['input'] = input;
        return this;
    }
    public withEncoderSettings(encoderSettings: Array<ModifyOttChannelEncoderSettingsEncoderSettings>): CreateOttChannelInfoReq {
        this['encoder_settings'] = encoderSettings;
        return this;
    }
    public set encoderSettings(encoderSettings: Array<ModifyOttChannelEncoderSettingsEncoderSettings>  | undefined) {
        this['encoder_settings'] = encoderSettings;
    }
    public get encoderSettings(): Array<ModifyOttChannelEncoderSettingsEncoderSettings> | undefined {
        return this['encoder_settings'];
    }
    public withRecordSettings(recordSettings: CreateOttChannelInfoReqRecordSettings): CreateOttChannelInfoReq {
        this['record_settings'] = recordSettings;
        return this;
    }
    public set recordSettings(recordSettings: CreateOttChannelInfoReqRecordSettings  | undefined) {
        this['record_settings'] = recordSettings;
    }
    public get recordSettings(): CreateOttChannelInfoReqRecordSettings | undefined {
        return this['record_settings'];
    }
    public withEndpoints(endpoints: Array<EndpointItem>): CreateOttChannelInfoReq {
        this['endpoints'] = endpoints;
        return this;
    }
    public withEncoderSettingsExpand(encoderSettingsExpand: EncoderSettingsExpand): CreateOttChannelInfoReq {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateOttChannelInfoReqStateEnum {
    ON = 'ON',
    OFF = 'OFF'
}
