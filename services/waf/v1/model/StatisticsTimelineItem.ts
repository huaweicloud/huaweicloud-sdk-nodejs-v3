import { TimeLineItem } from './TimeLineItem';


export class StatisticsTimelineItem {
    public key?: string;
    public timeline?: Array<TimeLineItem>;
    public constructor() { 
    }
    public withKey(key: string): StatisticsTimelineItem {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<TimeLineItem>): StatisticsTimelineItem {
        this['timeline'] = timeline;
        return this;
    }
}