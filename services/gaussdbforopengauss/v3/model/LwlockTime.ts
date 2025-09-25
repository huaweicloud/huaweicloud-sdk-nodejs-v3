import { EventTimeInfo } from './EventTimeInfo';


export class LwlockTime {
    private 'all_time'?: number;
    private 'lwlock_time_details'?: EventTimeInfo;
    public constructor(allTime?: number, lwlockTimeDetails?: EventTimeInfo) { 
        this['all_time'] = allTime;
        this['lwlock_time_details'] = lwlockTimeDetails;
    }
    public withAllTime(allTime: number): LwlockTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withLwlockTimeDetails(lwlockTimeDetails: EventTimeInfo): LwlockTime {
        this['lwlock_time_details'] = lwlockTimeDetails;
        return this;
    }
    public set lwlockTimeDetails(lwlockTimeDetails: EventTimeInfo  | undefined) {
        this['lwlock_time_details'] = lwlockTimeDetails;
    }
    public get lwlockTimeDetails(): EventTimeInfo | undefined {
        return this['lwlock_time_details'];
    }
}