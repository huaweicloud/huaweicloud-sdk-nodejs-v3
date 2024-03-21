import { LiveRequestArgs } from './LiveRequestArgs';
import { RecordRequestArgs } from './RecordRequestArgs';
import { TimeshiftRequestArgs } from './TimeshiftRequestArgs';


export class PackageRequestArgs {
    public record?: Array<RecordRequestArgs>;
    public timeshift?: Array<TimeshiftRequestArgs>;
    public live?: Array<LiveRequestArgs>;
    public constructor() { 
    }
    public withRecord(record: Array<RecordRequestArgs>): PackageRequestArgs {
        this['record'] = record;
        return this;
    }
    public withTimeshift(timeshift: Array<TimeshiftRequestArgs>): PackageRequestArgs {
        this['timeshift'] = timeshift;
        return this;
    }
    public withLive(live: Array<LiveRequestArgs>): PackageRequestArgs {
        this['live'] = live;
        return this;
    }
}