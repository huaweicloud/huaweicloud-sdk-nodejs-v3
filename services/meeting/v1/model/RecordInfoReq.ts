

export class RecordInfoReq {
    public confUUID?: string;
    public segmentOffset?: number;
    public segmentLimit?: number;
    public constructor(confUUID?: string) { 
        this['confUUID'] = confUUID;
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