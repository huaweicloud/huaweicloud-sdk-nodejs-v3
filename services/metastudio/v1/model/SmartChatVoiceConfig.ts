

export class SmartChatVoiceConfig {
    private 'voice_asset_id'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public provider?: string;
    public language?: SmartChatVoiceConfigLanguageEnum | string;
    private 'language_desc'?: string;
    public constructor() { 
    }
    public withVoiceAssetId(voiceAssetId: string): SmartChatVoiceConfig {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withSpeed(speed: number): SmartChatVoiceConfig {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): SmartChatVoiceConfig {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): SmartChatVoiceConfig {
        this['volume'] = volume;
        return this;
    }
    public withProvider(provider: string): SmartChatVoiceConfig {
        this['provider'] = provider;
        return this;
    }
    public withLanguage(language: SmartChatVoiceConfigLanguageEnum | string): SmartChatVoiceConfig {
        this['language'] = language;
        return this;
    }
    public withLanguageDesc(languageDesc: string): SmartChatVoiceConfig {
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
export enum SmartChatVoiceConfigLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai',
    FR = 'fr'
}
