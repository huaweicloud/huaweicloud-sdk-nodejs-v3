

export class VoiceConfigRsp {
    private 'voice_asset_id'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public provider?: string;
    public language?: VoiceConfigRspLanguageEnum | string;
    private 'language_desc'?: string;
    public constructor() { 
    }
    public withVoiceAssetId(voiceAssetId: string): VoiceConfigRsp {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withSpeed(speed: number): VoiceConfigRsp {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): VoiceConfigRsp {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): VoiceConfigRsp {
        this['volume'] = volume;
        return this;
    }
    public withProvider(provider: string): VoiceConfigRsp {
        this['provider'] = provider;
        return this;
    }
    public withLanguage(language: VoiceConfigRspLanguageEnum | string): VoiceConfigRsp {
        this['language'] = language;
        return this;
    }
    public withLanguageDesc(languageDesc: string): VoiceConfigRsp {
        this['language_desc'] = languageDesc;
        return this;
    }
    public set languageDesc(languageDesc: string  | undefined) {
        this['language_desc'] = languageDesc;
    }
    public get languageDesc(): string | undefined {
        return this['language_desc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VoiceConfigRspLanguageEnum {
    CN = 'CN',
    EN = 'EN'
}
