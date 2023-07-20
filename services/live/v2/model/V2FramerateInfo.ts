

export class V2FramerateInfo {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'data_list'?: Array<number>;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): V2FramerateInfo {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): V2FramerateInfo {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): V2FramerateInfo {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): V2FramerateInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): V2FramerateInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDataList(dataList: Array<number>): V2FramerateInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<number>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<number> | undefined {
        return this['data_list'];
    }
}