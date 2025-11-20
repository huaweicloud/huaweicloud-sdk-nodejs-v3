

export class TranscodeDetailInfo {
    private 'stream_name'?: string;
    public template?: string;
    private 'code_rate_format'?: string;
    public duration?: number;
    public constructor() { 
    }
    public withStreamName(streamName: string): TranscodeDetailInfo {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withTemplate(template: string): TranscodeDetailInfo {
        this['template'] = template;
        return this;
    }
    public withCodeRateFormat(codeRateFormat: string): TranscodeDetailInfo {
        this['code_rate_format'] = codeRateFormat;
        return this;
    }
    public set codeRateFormat(codeRateFormat: string  | undefined) {
        this['code_rate_format'] = codeRateFormat;
    }
    public get codeRateFormat(): string | undefined {
        return this['code_rate_format'];
    }
    public withDuration(duration: number): TranscodeDetailInfo {
        this['duration'] = duration;
        return this;
    }
}