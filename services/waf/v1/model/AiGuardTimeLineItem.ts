import { TimeLinePoint } from './TimeLinePoint';


export class AiGuardTimeLineItem {
    public key?: string;
    public timeline?: Array<TimeLinePoint>;
    public constructor(key?: string, timeline?: Array<TimeLinePoint>) { 
        this['key'] = key;
        this['timeline'] = timeline;
    }
    public withKey(key: string): AiGuardTimeLineItem {
        this['key'] = key;
        return this;
    }
    public withTimeline(timeline: Array<TimeLinePoint>): AiGuardTimeLineItem {
        this['timeline'] = timeline;
        return this;
    }
}