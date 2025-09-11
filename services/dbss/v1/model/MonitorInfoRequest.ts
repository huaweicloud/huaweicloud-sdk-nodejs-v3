import { Duration } from './Duration';


export class MonitorInfoRequest {
    public time?: Duration;
    public constructor(time?: Duration) { 
        this['time'] = time;
    }
    public withTime(time: Duration): MonitorInfoRequest {
        this['time'] = time;
        return this;
    }
}