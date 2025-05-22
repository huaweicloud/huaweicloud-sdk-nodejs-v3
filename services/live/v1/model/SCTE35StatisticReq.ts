

export class SCTE35StatisticReq {
    public type?: SCTE35StatisticReqTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(type?: string, startTime?: number, endTime?: number) { 
        this['type'] = type;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withType(type: SCTE35StatisticReqTypeEnum | string): SCTE35StatisticReq {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: number): SCTE35StatisticReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): SCTE35StatisticReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SCTE35StatisticReqTypeEnum {
    ALL = 'all',
    SPLICE_INSERT = 'splice_insert',
    TIME_SIGNAL = 'time_signal'
}
