import { SegmentDO } from './SegmentDO';


export class RecordInfoDO {
    public subject?: string;
    public beginTime?: string;
    public segmentOffset?: number;
    public segmentLimit?: number;
    public segmentCount?: number;
    public segmentList?: Array<SegmentDO>;
    public constructor() { 
    }
    public withSubject(subject: string): RecordInfoDO {
        this['subject'] = subject;
        return this;
    }
    public withBeginTime(beginTime: string): RecordInfoDO {
        this['beginTime'] = beginTime;
        return this;
    }
    public withSegmentOffset(segmentOffset: number): RecordInfoDO {
        this['segmentOffset'] = segmentOffset;
        return this;
    }
    public withSegmentLimit(segmentLimit: number): RecordInfoDO {
        this['segmentLimit'] = segmentLimit;
        return this;
    }
    public withSegmentCount(segmentCount: number): RecordInfoDO {
        this['segmentCount'] = segmentCount;
        return this;
    }
    public withSegmentList(segmentList: Array<SegmentDO>): RecordInfoDO {
        this['segmentList'] = segmentList;
        return this;
    }
}