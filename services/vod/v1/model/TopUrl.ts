

export class TopUrl {
    public value?: number;
    private 'asset_id'?: string | undefined;
    public title?: string;
    public duration?: number;
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
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
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
    public withSize(size: number): TopUrl {
        this['size'] = size;
        return this;
    }
}