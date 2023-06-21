

export class PublishParam {
    private 'rtmp_urls': Array<string> | undefined;
    public constructor(rtmpUrls?: any) { 
        this['rtmp_urls'] = rtmpUrls;
    }
    public withRtmpUrls(rtmpUrls: Array<string>): PublishParam {
        this['rtmp_urls'] = rtmpUrls;
        return this;
    }
    public set rtmpUrls(rtmpUrls: Array<string> | undefined) {
        this['rtmp_urls'] = rtmpUrls;
    }
    public get rtmpUrls() {
        return this['rtmp_urls'];
    }
}