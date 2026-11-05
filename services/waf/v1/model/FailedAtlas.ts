

export class FailedAtlas {
    private 'atlas_id'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withAtlasId(atlasId: string): FailedAtlas {
        this['atlas_id'] = atlasId;
        return this;
    }
    public set atlasId(atlasId: string  | undefined) {
        this['atlas_id'] = atlasId;
    }
    public get atlasId(): string | undefined {
        return this['atlas_id'];
    }
    public withReason(reason: string): FailedAtlas {
        this['reason'] = reason;
        return this;
    }
}