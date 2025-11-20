

export class ListTranscodeTaskDetailRequest {
    public domain?: string;
    private 'stream_name_list'?: Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ListTranscodeTaskDetailRequest {
        this['domain'] = domain;
        return this;
    }
    public withStreamNameList(streamNameList: Array<string>): ListTranscodeTaskDetailRequest {
        this['stream_name_list'] = streamNameList;
        return this;
    }
    public set streamNameList(streamNameList: Array<string>  | undefined) {
        this['stream_name_list'] = streamNameList;
    }
    public get streamNameList(): Array<string> | undefined {
        return this['stream_name_list'];
    }
    public withStartTime(startTime: string): ListTranscodeTaskDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTranscodeTaskDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}