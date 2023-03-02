import { VideoSegmentInfo } from './VideoSegmentInfo';


export class VideoCuttingInference {
    private 'segment_info': Array<VideoSegmentInfo> | undefined;
    public constructor(segmentInfo?: any) { 
        this['segment_info'] = segmentInfo;
    }
    public withSegmentInfo(segmentInfo: Array<VideoSegmentInfo>): VideoCuttingInference {
        this['segment_info'] = segmentInfo;
        return this;
    }
    public set segmentInfo(segmentInfo: Array<VideoSegmentInfo> | undefined) {
        this['segment_info'] = segmentInfo;
    }
    public get segmentInfo() {
        return this['segment_info'];
    }
}