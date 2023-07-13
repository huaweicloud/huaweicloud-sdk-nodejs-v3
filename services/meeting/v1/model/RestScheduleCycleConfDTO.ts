import { CycleSubConfConfigDTO } from './CycleSubConfConfigDTO';


export class RestScheduleCycleConfDTO {
    public cycleSubConfID: string;
    public mediaTypes: string;
    public startTime: string;
    public length: number;
    public isAutoRecord?: number;
    public confConfigInfo?: CycleSubConfConfigDTO;
    public recordAuthType?: number;
    public description?: string;
    public constructor(cycleSubConfID?: any, mediaTypes?: any, startTime?: any, length?: any) { 
        this['cycleSubConfID'] = cycleSubConfID;
        this['mediaTypes'] = mediaTypes;
        this['startTime'] = startTime;
        this['length'] = length;
    }
    public withCycleSubConfID(cycleSubConfID: string): RestScheduleCycleConfDTO {
        this['cycleSubConfID'] = cycleSubConfID;
        return this;
    }
    public withMediaTypes(mediaTypes: string): RestScheduleCycleConfDTO {
        this['mediaTypes'] = mediaTypes;
        return this;
    }
    public withStartTime(startTime: string): RestScheduleCycleConfDTO {
        this['startTime'] = startTime;
        return this;
    }
    public withLength(length: number): RestScheduleCycleConfDTO {
        this['length'] = length;
        return this;
    }
    public withIsAutoRecord(isAutoRecord: number): RestScheduleCycleConfDTO {
        this['isAutoRecord'] = isAutoRecord;
        return this;
    }
    public withConfConfigInfo(confConfigInfo: CycleSubConfConfigDTO): RestScheduleCycleConfDTO {
        this['confConfigInfo'] = confConfigInfo;
        return this;
    }
    public withRecordAuthType(recordAuthType: number): RestScheduleCycleConfDTO {
        this['recordAuthType'] = recordAuthType;
        return this;
    }
    public withDescription(description: string): RestScheduleCycleConfDTO {
        this['description'] = description;
        return this;
    }
}