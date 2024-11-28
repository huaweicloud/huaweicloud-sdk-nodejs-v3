import { AssociateInstanceGlobalEipSegmentRequestBody } from './AssociateInstanceGlobalEipSegmentRequestBody';


export class AssociateGeipSegmentInstanceRequest {
    private 'global_eip_segment_id'?: string;
    public body?: AssociateInstanceGlobalEipSegmentRequestBody;
    public constructor(globalEipSegmentId?: string) { 
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public withGlobalEipSegmentId(globalEipSegmentId: string): AssociateGeipSegmentInstanceRequest {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: string  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): string | undefined {
        return this['global_eip_segment_id'];
    }
    public withBody(body: AssociateInstanceGlobalEipSegmentRequestBody): AssociateGeipSegmentInstanceRequest {
        this['body'] = body;
        return this;
    }
}