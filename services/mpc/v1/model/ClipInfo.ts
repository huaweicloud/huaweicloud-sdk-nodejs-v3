import { ObsObjInfo } from './ObsObjInfo';


export class ClipInfo {
    public input?: ObsObjInfo;
    private 'timeline_start'?: string | undefined;
    private 'timeline_end'?: string | undefined;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): ClipInfo {
        this['input'] = input;
        return this;
    }
    public withTimelineStart(timelineStart: string): ClipInfo {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineEnd(timelineEnd: string): ClipInfo {
        this['timeline_end'] = timelineEnd;
        return this;
    }
    public set timelineEnd(timelineEnd: string | undefined) {
        this['timeline_end'] = timelineEnd;
    }
    public get timelineEnd() {
        return this['timeline_end'];
    }
}