

export class StreamForbiddenSetting {
    public domain?: string;
    private 'app_name'?: string;
    private 'stream_name'?: string;
    private 'resume_time'?: Date;
    public constructor(domain?: string, appName?: string, streamName?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['stream_name'] = streamName;
    }
    public withDomain(domain: string): StreamForbiddenSetting {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): StreamForbiddenSetting {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStreamName(streamName: string): StreamForbiddenSetting {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withResumeTime(resumeTime: Date): StreamForbiddenSetting {
        this['resume_time'] = resumeTime;
        return this;
    }
    public set resumeTime(resumeTime: Date  | undefined) {
        this['resume_time'] = resumeTime;
    }
    public get resumeTime(): Date | undefined {
        return this['resume_time'];
    }
}