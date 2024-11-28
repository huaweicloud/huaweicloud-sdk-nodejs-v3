import { UpdateGlobalEipSegmentRequestBodyGlobalEipSegment } from './UpdateGlobalEipSegmentRequestBodyGlobalEipSegment';


export class UpdateGlobalEipSegmentRequestBody {
    private 'global_eip_segment'?: UpdateGlobalEipSegmentRequestBodyGlobalEipSegment;
    public constructor(globalEipSegment?: UpdateGlobalEipSegmentRequestBodyGlobalEipSegment) { 
        this['global_eip_segment'] = globalEipSegment;
    }
    public withGlobalEipSegment(globalEipSegment: UpdateGlobalEipSegmentRequestBodyGlobalEipSegment): UpdateGlobalEipSegmentRequestBody {
        this['global_eip_segment'] = globalEipSegment;
        return this;
    }
    public set globalEipSegment(globalEipSegment: UpdateGlobalEipSegmentRequestBodyGlobalEipSegment  | undefined) {
        this['global_eip_segment'] = globalEipSegment;
    }
    public get globalEipSegment(): UpdateGlobalEipSegmentRequestBodyGlobalEipSegment | undefined {
        return this['global_eip_segment'];
    }
}