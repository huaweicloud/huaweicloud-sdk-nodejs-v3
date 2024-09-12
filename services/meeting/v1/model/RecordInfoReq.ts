

export class RecordInfoReq {
    public confUUID?: string;
    public segmentOffset?: number;
    public segmentLimit?: number;
    public constructor() { 
    }
    public withConfUUID(confUUID: string): RecordInfoReq {
        this['confUUID'] = confUUID;
        return this;
    }
    public withSegmentOffset(segmentOffset: number): RecordInfoReq {
        this['segmentOffset'] = segmentOffset;
        return this;
    }
    public withSegmentLimit(segmentLimit: number): RecordInfoReq {
        this['segmentLimit'] = segmentLimit;
        return this;
    }
}