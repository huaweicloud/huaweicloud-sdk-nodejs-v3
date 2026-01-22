import { ScheduleInfoDTOAbsolute } from './ScheduleInfoDTOAbsolute';
import { ScheduleInfoDTOPeriodic } from './ScheduleInfoDTOPeriodic';


export class ScheduleInfoDTO {
    private 'object_id'?: string;
    public name?: string;
    public description?: string;
    public periodic?: Array<ScheduleInfoDTOPeriodic>;
    public absolute?: ScheduleInfoDTOAbsolute;
    public constructor(objectId?: string, name?: string) { 
        this['object_id'] = objectId;
        this['name'] = name;
    }
    public withObjectId(objectId: string): ScheduleInfoDTO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withName(name: string): ScheduleInfoDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ScheduleInfoDTO {
        this['description'] = description;
        return this;
    }
    public withPeriodic(periodic: Array<ScheduleInfoDTOPeriodic>): ScheduleInfoDTO {
        this['periodic'] = periodic;
        return this;
    }
    public withAbsolute(absolute: ScheduleInfoDTOAbsolute): ScheduleInfoDTO {
        this['absolute'] = absolute;
        return this;
    }
}