

export class PlatformLiveDetailInfo {
    private 'platform_id'?: string;
    public platform?: string;
    public account?: string;
    private 'live_id'?: string;
    public constructor() { 
    }
    public withPlatformId(platformId: string): PlatformLiveDetailInfo {
        this['platform_id'] = platformId;
        return this;
    }
    public set platformId(platformId: string  | undefined) {
        this['platform_id'] = platformId;
    }
    public get platformId(): string | undefined {
        return this['platform_id'];
    }
    public withPlatform(platform: string): PlatformLiveDetailInfo {
        this['platform'] = platform;
        return this;
    }
    public withAccount(account: string): PlatformLiveDetailInfo {
        this['account'] = account;
        return this;
    }
    public withLiveId(liveId: string): PlatformLiveDetailInfo {
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