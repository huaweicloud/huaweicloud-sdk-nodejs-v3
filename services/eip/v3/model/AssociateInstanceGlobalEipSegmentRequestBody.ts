import { AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment } from './AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment';


export class AssociateInstanceGlobalEipSegmentRequestBody {
    private 'global_eip_segment'?: AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment;
    public constructor(globalEipSegment?: AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment) { 
        this['global_eip_segment'] = globalEipSegment;
    }
    public withGlobalEipSegment(globalEipSegment: AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment): AssociateInstanceGlobalEipSegmentRequestBody {
        this['global_eip_segment'] = globalEipSegment;
        return this;
    }
    public set globalEipSegment(globalEipSegment: AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment  | undefined) {
        this['global_eip_segment'] = globalEipSegment;
    }
    public get globalEipSegment(): AssociateInstanceGlobalEipSegmentRequestBodyGlobalEipSegment | undefined {
        return this['global_eip_segment'];
    }
}