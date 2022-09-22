import { TimeLineItem } from './TimeLineItem';


export class BandwidthStatisticsTimelineItem {
    public key?: string;
    public timeline?: Array<TimeLineItem>;
    public constructor() { 
    }
    public withKey(key: string): BandwidthStatisticsTimelineItem {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<TimeLineItem>): BandwidthStatisticsTimelineItem {
        this['timeline'] = timeline;
        return this;
    }
}