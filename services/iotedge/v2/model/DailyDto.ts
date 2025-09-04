import { ExceptionalDates } from './ExceptionalDates';
import { TimeSpans } from './TimeSpans';


export class DailyDto {
    private 'exceptional_dates'?: ExceptionalDates;
    private 'time_spans'?: Array<TimeSpans>;
    public weekdays?: object;
    public constructor(timeSpans?: Array<TimeSpans>) { 
        this['time_spans'] = timeSpans;
    }
    public withExceptionalDates(exceptionalDates: ExceptionalDates): DailyDto {
        this['exceptional_dates'] = exceptionalDates;
        return this;
    }
    public set exceptionalDates(exceptionalDates: ExceptionalDates  | undefined) {
        this['exceptional_dates'] = exceptionalDates;
    }
    public get exceptionalDates(): ExceptionalDates | undefined {
        return this['exceptional_dates'];
    }
    public withTimeSpans(timeSpans: Array<TimeSpans>): DailyDto {
        this['time_spans'] = timeSpans;
        return this;
    }
    public set timeSpans(timeSpans: Array<TimeSpans>  | undefined) {
        this['time_spans'] = timeSpans;
    }
    public get timeSpans(): Array<TimeSpans> | undefined {
        return this['time_spans'];
    }
    public withWeekdays(weekdays: object): DailyDto {
        this['weekdays'] = weekdays;
        return this;
    }
}