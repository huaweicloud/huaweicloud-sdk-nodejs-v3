

export class StreamForbiddenList {
    private 'app_name'?: string;
    private 'stream_name'?: string;
    private 'resume_time'?: string;
    public constructor(appName?: string, streamName?: string) { 
        this['app_name'] = appName;
        this['stream_name'] = streamName;
    }
    public withAppName(appName: string): StreamForbiddenList {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStreamName(streamName: string): StreamForbiddenList {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withResumeTime(resumeTime: string): StreamForbiddenList {
        this['resume_time'] = resumeTime;
        return this;
    }
    public set resumeTime(resumeTime: string  | undefined) {
        this['resume_time'] = resumeTime;
    }
    public get resumeTime(): string | undefined {
        return this['resume_time'];
    }
}