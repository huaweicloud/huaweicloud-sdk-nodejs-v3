

export class TopUrl {
    public value?: number;
    private 'asset_id'?: string;
    public title?: string;
    public duration?: number;
    private 'duration_ms'?: number;
    public size?: number;
    public constructor() { 
    }
    public withValue(value: number): TopUrl {
        this['value'] = value;
        return this;
    }
    public withAssetId(assetId: string): TopUrl {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTitle(title: string): TopUrl {
        this['title'] = title;
        return this;
    }
    public withDuration(duration: number): TopUrl {
        this['duration'] = duration;
        return this;
    }
    public withDurationMs(durationMs: number): TopUrl {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: number  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): number | undefined {
        return this['duration_ms'];
    }
    public withSize(size: number): TopUrl {
        this['size'] = size;
        return this;
    }
}