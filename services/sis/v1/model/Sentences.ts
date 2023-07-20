import { FlashScoreResult } from './FlashScoreResult';


export class Sentences {
    private 'end_time'?: number;
    public result?: FlashScoreResult;
    private 'start_time'?: number;
    public constructor() { 
    }
    public withEndTime(endTime: number): Sentences {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withResult(result: FlashScoreResult): Sentences {
        this['result'] = result;
        return this;
    }
    public withStartTime(startTime: number): Sentences {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
}