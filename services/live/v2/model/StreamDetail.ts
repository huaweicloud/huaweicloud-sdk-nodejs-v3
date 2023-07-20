

export class StreamDetail {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'data_list'?: Array<number>;
    public constructor(startTime?: string, endTime?: string, dataList?: Array<number>) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['data_list'] = dataList;
    }
    public withStartTime(startTime: string): StreamDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): StreamDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDataList(dataList: Array<number>): StreamDetail {
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