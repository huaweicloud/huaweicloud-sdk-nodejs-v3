import { UpdateGlobalEipSegmentRequestBody } from './UpdateGlobalEipSegmentRequestBody';


export class UpdateGlobalEipSegmentRequest {
    private 'global_eip_segment_id'?: string;
    public body?: UpdateGlobalEipSegmentRequestBody;
    public constructor(globalEipSegmentId?: string) { 
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public withGlobalEipSegmentId(globalEipSegmentId: string): UpdateGlobalEipSegmentRequest {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: string  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): string | undefined {
        return this['global_eip_segment_id'];
    }
    public withBody(body: UpdateGlobalEipSegmentRequestBody): UpdateGlobalEipSegmentRequest {
        this['body'] = body;
        return this;
    }
}