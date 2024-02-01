

export class LiveAudioConfig {
    private 'asset_id'?: string;
    private 'audio_url'?: string;
    private 'subtitle_url'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): LiveAudioConfig {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAudioUrl(audioUrl: string): LiveAudioConfig {
        this['audio_url'] = audioUrl;
        return this;
    }
    public set audioUrl(audioUrl: string  | undefined) {
        this['audio_url'] = audioUrl;
    }
    public get audioUrl(): string | undefined {
        return this['audio_url'];
    }
    public withSubtitleUrl(subtitleUrl: string): LiveAudioConfig {
        this['subtitle_url'] = subtitleUrl;
        return this;
    }
    public set subtitleUrl(subtitleUrl: string  | undefined) {
        this['subtitle_url'] = subtitleUrl;
    }
    public get subtitleUrl(): string | undefined {
        return this['subtitle_url'];
    }
}