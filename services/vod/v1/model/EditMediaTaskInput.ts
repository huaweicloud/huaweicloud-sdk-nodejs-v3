import { ObsInfo } from './ObsInfo';


export class EditMediaTaskInput {
    public input?: ObsInfo;
    private 'timeline_start'?: string;
    private 'timeline_end'?: string;
    public constructor(input?: ObsInfo) { 
        this['input'] = input;
    }
    public withInput(input: ObsInfo): EditMediaTaskInput {
        this['input'] = input;
        return this;
    }
    public withTimelineStart(timelineStart: string): EditMediaTaskInput {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineEnd(timelineEnd: string): EditMediaTaskInput {
        this['timeline_end'] = timelineEnd;
        return this;
    }
    public set timelineEnd(timelineEnd: string  | undefined) {
        this['timeline_end'] = timelineEnd;
    }
    public get timelineEnd(): string | undefined {
        return this['timeline_end'];
    }
}