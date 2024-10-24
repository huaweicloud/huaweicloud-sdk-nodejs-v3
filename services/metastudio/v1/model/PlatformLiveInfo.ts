

export class PlatformLiveInfo {
    private 'platform_id'?: string;
    private 'live_id'?: string;
    public constructor(platformId?: string, liveId?: string) { 
        this['platform_id'] = platformId;
        this['live_id'] = liveId;
    }
    public withPlatformId(platformId: string): PlatformLiveInfo {
        this['platform_id'] = platformId;
        return this;
    }
    public set platformId(platformId: string  | undefined) {
        this['platform_id'] = platformId;
    }
    public get platformId(): string | undefined {
        return this['platform_id'];
    }
    public withLiveId(liveId: string): PlatformLiveInfo {
        this['live_id'] = liveId;
        return this;
    }
    public set liveId(liveId: string  | undefined) {
        this['live_id'] = liveId;
    }
    public get liveId(): string | undefined {
        return this['live_id'];
    }
}