import { ScheduleVOAbsolute } from './ScheduleVOAbsolute';
import { ScheduleVOPeriodic } from './ScheduleVOPeriodic';


export class ScheduleVO {
    private 'schedule_id'?: string;
    public name?: string;
    public description?: string;
    private 'ref_count'?: number;
    public periodic?: Array<ScheduleVOPeriodic>;
    public absolute?: ScheduleVOAbsolute;
    public constructor() { 
    }
    public withScheduleId(scheduleId: string): ScheduleVO {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
    public withName(name: string): ScheduleVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ScheduleVO {
        this['description'] = description;
        return this;
    }
    public withRefCount(refCount: number): ScheduleVO {
        this['ref_count'] = refCount;
        return this;
    }
    public set refCount(refCount: number  | undefined) {
        this['ref_count'] = refCount;
    }
    public get refCount(): number | undefined {
        return this['ref_count'];
    }
    public withPeriodic(periodic: Array<ScheduleVOPeriodic>): ScheduleVO {
        this['periodic'] = periodic;
        return this;
    }
    public withAbsolute(absolute: ScheduleVOAbsolute): ScheduleVO {
        this['absolute'] = absolute;
        return this;
    }
}