import { TimeLineItem } from './TimeLineItem';


export class StatisticsTimelineItem {
    public key?: StatisticsTimelineItemKeyEnum | string;
    public timeline?: Array<TimeLineItem>;
    public constructor() { 
    }
    public withKey(key: StatisticsTimelineItemKeyEnum | string): StatisticsTimelineItem {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<TimeLineItem>): StatisticsTimelineItem {
        this['timeline'] = timeline;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StatisticsTimelineItemKeyEnum {
    ACCESS = 'ACCESS',
    CRAWLER = 'CRAWLER',
    ATTACK = 'ATTACK',
    WEB_ATTACK = 'WEB_ATTACK',
    PRECISE = 'PRECISE',
    CC = 'CC'
}
