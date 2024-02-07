import { CreateGlobalEipSegmentRequestBodyGlobalEipSegment } from './CreateGlobalEipSegmentRequestBodyGlobalEipSegment';


export class CreateGlobalEipSegmentRequestBody {
    private 'global_eip_segment'?: CreateGlobalEipSegmentRequestBodyGlobalEipSegment;
    public constructor(globalEipSegment?: CreateGlobalEipSegmentRequestBodyGlobalEipSegment) { 
        this['global_eip_segment'] = globalEipSegment;
    }
    public withGlobalEipSegment(globalEipSegment: CreateGlobalEipSegmentRequestBodyGlobalEipSegment): CreateGlobalEipSegmentRequestBody {
        this['global_eip_segment'] = globalEipSegment;
        return this;
    }
    public set globalEipSegment(globalEipSegment: CreateGlobalEipSegmentRequestBodyGlobalEipSegment  | undefined) {
        this['global_eip_segment'] = globalEipSegment;
    }
    public get globalEipSegment(): CreateGlobalEipSegmentRequestBodyGlobalEipSegment | undefined {
        return this['global_eip_segment'];
    }
}