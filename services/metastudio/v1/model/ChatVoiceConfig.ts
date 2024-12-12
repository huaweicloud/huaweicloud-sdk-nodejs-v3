

export class ChatVoiceConfig {
    private 'voice_asset_id'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public provider?: string;
    public language?: ChatVoiceConfigLanguageEnum | string;
    public constructor() { 
    }
    public withVoiceAssetId(voiceAssetId: string): ChatVoiceConfig {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withSpeed(speed: number): ChatVoiceConfig {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): ChatVoiceConfig {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): ChatVoiceConfig {
        this['volume'] = volume;
        return this;
    }
    public withProvider(provider: string): ChatVoiceConfig {
        this['provider'] = provider;
        return this;
    }
    public withLanguage(language: ChatVoiceConfigLanguageEnum | string): ChatVoiceConfig {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChatVoiceConfigLanguageEnum {
    CN = 'CN',
    EN = 'EN'
}
