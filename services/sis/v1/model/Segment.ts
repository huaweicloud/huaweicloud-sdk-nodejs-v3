import { TranscriberResult } from './TranscriberResult';


export class Segment {
    private 'start_time'?: number;
    private 'end_time'?: number;
    public result?: TranscriberResult;
    public constructor(startTime?: number, endTime?: number, result?: TranscriberResult) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['result'] = result;
    }
    public withStartTime(startTime: number): Segment {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): Segment {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withResult(result: TranscriberResult): Segment {
        this['result'] = result;
        return this;
    }
}