import { SegmentFileDO } from './SegmentFileDO';


export class SegmentDO {
    public manualOrder?: number;
    public segmentOrder?: number;
    public segmentSize?: string;
    public fileList?: Array<SegmentFileDO>;
    public constructor() { 
    }
    public withManualOrder(manualOrder: number): SegmentDO {
        this['manualOrder'] = manualOrder;
        return this;
    }
    public withSegmentOrder(segmentOrder: number): SegmentDO {
        this['segmentOrder'] = segmentOrder;
        return this;
    }
    public withSegmentSize(segmentSize: string): SegmentDO {
        this['segmentSize'] = segmentSize;
        return this;
    }
    public withFileList(fileList: Array<SegmentFileDO>): SegmentDO {
        this['fileList'] = fileList;
        return this;
    }
}