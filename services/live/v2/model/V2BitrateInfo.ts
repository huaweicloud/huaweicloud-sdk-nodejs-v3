

export class V2BitrateInfo {
    private 'publish_domain'?: string | undefined;
    public app?: string;
    public stream?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'data_list'?: Array<number> | undefined;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): V2BitrateInfo {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): V2BitrateInfo {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): V2BitrateInfo {
        this['stream'] = stream;
        return this;
    }
    public withStartTime(startTime: string): V2BitrateInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): V2BitrateInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDataList(dataList: Array<number>): V2BitrateInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<number> | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList() {
        return this['data_list'];
    }
}