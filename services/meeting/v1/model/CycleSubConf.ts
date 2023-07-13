import { CycleSubConfConfigDTO } from './CycleSubConfConfigDTO';


export class CycleSubConf {
    public cycleSubConfID: string;
    public conferenceID?: string;
    public mediaType?: string;
    public startTime?: string;
    public endTime?: string;
    public isAutoRecord?: number;
    public confConfigInfo?: CycleSubConfConfigDTO;
    public recordAuthType?: number;
    public description?: string;
    public constructor(cycleSubConfID?: any) { 
        this['cycleSubConfID'] = cycleSubConfID;
    }
    public withCycleSubConfID(cycleSubConfID: string): CycleSubConf {
        this['cycleSubConfID'] = cycleSubConfID;
        return this;
    }
    public withConferenceID(conferenceID: string): CycleSubConf {
        this['conferenceID'] = conferenceID;
        return this;
    }
    public withMediaType(mediaType: string): CycleSubConf {
        this['mediaType'] = mediaType;
        return this;
    }
    public withStartTime(startTime: string): CycleSubConf {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): CycleSubConf {
        this['endTime'] = endTime;
        return this;
    }
    public withIsAutoRecord(isAutoRecord: number): CycleSubConf {
        this['isAutoRecord'] = isAutoRecord;
        return this;
    }
    public withConfConfigInfo(confConfigInfo: CycleSubConfConfigDTO): CycleSubConf {
        this['confConfigInfo'] = confConfigInfo;
        return this;
    }
    public withRecordAuthType(recordAuthType: number): CycleSubConf {
        this['recordAuthType'] = recordAuthType;
        return this;
    }
    public withDescription(description: string): CycleSubConf {
        this['description'] = description;
        return this;
    }
}