

export class ShowStreamCountRequest {
    private 'publish_domains': Array<string> | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(publishDomains?: any) { 
        this['publish_domains'] = publishDomains;
    }
    public withPublishDomains(publishDomains: Array<string>): ShowStreamCountRequest {
        this['publish_domains'] = publishDomains;
        return this;
    }
    public set publishDomains(publishDomains: Array<string> | undefined) {
        this['publish_domains'] = publishDomains;
    }
    public get publishDomains() {
        return this['publish_domains'];
    }
    public withStartTime(startTime: string): ShowStreamCountRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowStreamCountRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}