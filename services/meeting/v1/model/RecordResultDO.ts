

export class RecordResultDO {
    public confUUID?: string;
    public confID?: string;
    public url?: Array<string>;
    public rcdTime?: number;
    public rcdSize?: number;
    public subject?: string;
    public scheduserName?: string;
    public startTime?: string;
    public isDecodeFinish?: boolean;
    public decodeEndTime?: number;
    public available?: boolean;
    public recordAuthType?: number;
    public constructor() { 
    }
    public withConfUUID(confUUID: string): RecordResultDO {
        this['confUUID'] = confUUID;
        return this;
    }
    public withConfID(confID: string): RecordResultDO {
        this['confID'] = confID;
        return this;
    }
    public withUrl(url: Array<string>): RecordResultDO {
        this['url'] = url;
        return this;
    }
    public withRcdTime(rcdTime: number): RecordResultDO {
        this['rcdTime'] = rcdTime;
        return this;
    }
    public withRcdSize(rcdSize: number): RecordResultDO {
        this['rcdSize'] = rcdSize;
        return this;
    }
    public withSubject(subject: string): RecordResultDO {
        this['subject'] = subject;
        return this;
    }
    public withScheduserName(scheduserName: string): RecordResultDO {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withStartTime(startTime: string): RecordResultDO {
        this['startTime'] = startTime;
        return this;
    }
    public withIsDecodeFinish(isDecodeFinish: boolean): RecordResultDO {
        this['isDecodeFinish'] = isDecodeFinish;
        return this;
    }
    public withDecodeEndTime(decodeEndTime: number): RecordResultDO {
        this['decodeEndTime'] = decodeEndTime;
        return this;
    }
    public withAvailable(available: boolean): RecordResultDO {
        this['available'] = available;
        return this;
    }
    public withRecordAuthType(recordAuthType: number): RecordResultDO {
        this['recordAuthType'] = recordAuthType;
        return this;
    }
}