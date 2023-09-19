

export class BackgroundMusicConfig {
    private 'music_asset_id'?: string;
    public volume?: number;
    public constructor() { 
    }
    public withMusicAssetId(musicAssetId: string): BackgroundMusicConfig {
        this['music_asset_id'] = musicAssetId;
        return this;
    }
    public set musicAssetId(musicAssetId: string  | undefined) {
        this['music_asset_id'] = musicAssetId;
    }
    public get musicAssetId(): string | undefined {
        return this['music_asset_id'];
    }
    public withVolume(volume: number): BackgroundMusicConfig {
        this['volume'] = volume;
        return this;
    }
}