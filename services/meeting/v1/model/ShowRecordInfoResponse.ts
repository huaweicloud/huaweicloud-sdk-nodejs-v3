import { SegmentDO } from './SegmentDO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordInfoResponse extends SdkResponse {
    public code?: number;
    public message?: string;
    public subject?: string;
    public beginTime?: string;
    public segmentOffset?: number;
    public segmentLimit?: number;
    public segmentCount?: number;
    public segmentList?: Array<SegmentDO>;
    public constructor() { 
        super();
    }
    public withCode(code: number): ShowRecordInfoResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowRecordInfoResponse {
        this['message'] = message;
        return this;
    }
    public withSubject(subject: string): ShowRecordInfoResponse {
        this['subject'] = subject;
        return this;
    }
    public withBeginTime(beginTime: string): ShowRecordInfoResponse {
        this['beginTime'] = beginTime;
        return this;
    }
    public withSegmentOffset(segmentOffset: number): ShowRecordInfoResponse {
        this['segmentOffset'] = segmentOffset;
        return this;
    }
    public withSegmentLimit(segmentLimit: number): ShowRecordInfoResponse {
        this['segmentLimit'] = segmentLimit;
        return this;
    }
    public withSegmentCount(segmentCount: number): ShowRecordInfoResponse {
        this['segmentCount'] = segmentCount;
        return this;
    }
    public withSegmentList(segmentList: Array<SegmentDO>): ShowRecordInfoResponse {
        this['segmentList'] = segmentList;
        return this;
    }
}