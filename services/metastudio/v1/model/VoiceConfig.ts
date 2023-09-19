

export class VoiceConfig {
    private 'voice_asset_id'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public constructor(voiceAssetId?: string) { 
        this['voice_asset_id'] = voiceAssetId;
    }
    public withVoiceAssetId(voiceAssetId: string): VoiceConfig {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withSpeed(speed: number): VoiceConfig {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): VoiceConfig {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): VoiceConfig {
        this['volume'] = volume;
        return this;
    }
}