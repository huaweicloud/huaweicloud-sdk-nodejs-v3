import { Duration } from './Duration';


export class SqlSessionStatisticsRequest {
    private 'db_id'?: Array<string>;
    public time?: Duration;
    public constructor(time?: Duration) { 
        this['time'] = time;
    }
    public withDbId(dbId: Array<string>): SqlSessionStatisticsRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: Array<string>  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): Array<string> | undefined {
        return this['db_id'];
    }
    public withTime(time: Duration): SqlSessionStatisticsRequest {
        this['time'] = time;
        return this;
    }
}