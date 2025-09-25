import { EventTimeInfo } from './EventTimeInfo';


export class LockTime {
    private 'all_time'?: number;
    private 'lock_time_details'?: EventTimeInfo;
    public constructor(allTime?: number, lockTimeDetails?: EventTimeInfo) { 
        this['all_time'] = allTime;
        this['lock_time_details'] = lockTimeDetails;
    }
    public withAllTime(allTime: number): LockTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withLockTimeDetails(lockTimeDetails: EventTimeInfo): LockTime {
        this['lock_time_details'] = lockTimeDetails;
        return this;
    }
    public set lockTimeDetails(lockTimeDetails: EventTimeInfo  | undefined) {
        this['lock_time_details'] = lockTimeDetails;
    }
    public get lockTimeDetails(): EventTimeInfo | undefined {
        return this['lock_time_details'];
    }
}