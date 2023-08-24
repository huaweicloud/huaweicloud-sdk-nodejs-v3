

export class AnimationItem {
    private 'animation_asset_id'?: string;
    public timestamp?: number;
    public constructor() { 
    }
    public withAnimationAssetId(animationAssetId: string): AnimationItem {
        this['animation_asset_id'] = animationAssetId;
        return this;
    }
    public set animationAssetId(animationAssetId: string  | undefined) {
        this['animation_asset_id'] = animationAssetId;
    }
    public get animationAssetId(): string | undefined {
        return this['animation_asset_id'];
    }
    public withTimestamp(timestamp: number): AnimationItem {
        this['timestamp'] = timestamp;
        return this;
    }
}