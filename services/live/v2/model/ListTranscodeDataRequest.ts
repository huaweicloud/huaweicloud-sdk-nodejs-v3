

export class ListTranscodeDataRequest {
    private 'publish_domain'?: string | undefined;
    public stream?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): ListTranscodeDataRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withStream(stream: string): ListTranscodeDataRequest {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): ListTranscodeDataRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTranscodeDataRequest {
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