

export class AccessControlUrls {
    public urls?: Array<string>;
    private 'ban_duration'?: number;
    public constructor(urls?: Array<string>) { 
        this['urls'] = urls;
    }
    public withUrls(urls: Array<string>): AccessControlUrls {
        this['urls'] = urls;
        return this;
    }
    public withBanDuration(banDuration: number): AccessControlUrls {
        this['ban_duration'] = banDuration;
        return this;
    }
    public set banDuration(banDuration: number  | undefined) {
        this['ban_duration'] = banDuration;
    }
    public get banDuration(): number | undefined {
        return this['ban_duration'];
    }
}