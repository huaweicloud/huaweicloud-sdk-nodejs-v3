import { CountDetail } from './CountDetail';


export class StatisticsDetail {
    public count?: CountDetail;
    private 'start_time'?: string;
    public constructor(count?: CountDetail, startTime?: string) { 
        this['count'] = count;
        this['start_time'] = startTime;
    }
    public withCount(count: CountDetail): StatisticsDetail {
        this['count'] = count;
        return this;
    }
    public withStartTime(startTime: string): StatisticsDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}