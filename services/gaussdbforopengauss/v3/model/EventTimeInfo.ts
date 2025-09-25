import { TopEventInfoResult } from './TopEventInfoResult';


export class EventTimeInfo {
    public events?: Array<TopEventInfoResult>;
    private 'left_time'?: number;
    private 'other_time'?: number;
    public constructor(events?: Array<TopEventInfoResult>, leftTime?: number, otherTime?: number) { 
        this['events'] = events;
        this['left_time'] = leftTime;
        this['other_time'] = otherTime;
    }
    public withEvents(events: Array<TopEventInfoResult>): EventTimeInfo {
        this['events'] = events;
        return this;
    }
    public withLeftTime(leftTime: number): EventTimeInfo {
        this['left_time'] = leftTime;
        return this;
    }
    public set leftTime(leftTime: number  | undefined) {
        this['left_time'] = leftTime;
    }
    public get leftTime(): number | undefined {
        return this['left_time'];
    }
    public withOtherTime(otherTime: number): EventTimeInfo {
        this['other_time'] = otherTime;
        return this;
    }
    public set otherTime(otherTime: number  | undefined) {
        this['other_time'] = otherTime;
    }
    public get otherTime(): number | undefined {
        return this['other_time'];
    }
}